import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

import R from '@assets/R';
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@configs';
import { IInputProps, Input, View } from 'native-base';

interface Props extends IInputProps {
  title?: string;
  containerStyle?: ViewStyle;
  isNumber?: boolean;
  isRequired?: boolean;
}

const NewTextInput = (props: Props) => {
  const {
    title,
    containerStyle,
    isNumber,
    isRequired = false,
    ...otherProps
  } = props;

  return (
    <View style={[containerStyle]}>
      {title && (
        <Text style={styles.title}>
          {title}
          {isRequired && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <Input
        focusOutlineColor={R.colors.mainColor}
        bgColor={R.colors.white}
        size="lg"
        autoCapitalize="none"
        returnKeyType="default"
        borderColor={R.colors.borderA1}
        keyboardType={isNumber ? 'numeric' : 'default'}
        minHeight={HEIGHT(45)}
        variant="underlined"
        {...otherProps}
      />
    </View>
  );
};

export default NewTextInput;

const styles = StyleSheet.create({
  title: {
    color: R.colors.black0,
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
    marginBottom: HEIGHT(3),
  },
  required: {
    color: R.colors.mainColor,
  },
  iconLeft: {
    marginHorizontal: WIDTH(8),
  },
});
