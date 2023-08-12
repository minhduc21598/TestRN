import React, { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

import R from '@assets/R';
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@configs';
import { Button, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  customContainerStyle?: ViewStyle;
  customTitleStyle?: TextStyle;
  icon?: ReactElement;
}

const BaseButton = (props: Props) => {
  const { title, customContainerStyle, customTitleStyle, ...otherProps } =
    props;

  return (
    <Button
      style={[styles.button, customContainerStyle]}
      isLoadingText={title}
      {...otherProps}>
      <Text style={[styles.title, customTitleStyle]}>{title && title}</Text>
    </Button>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    width: WIDTH(343),
    height: HEIGHT(45),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.mainColor,
    borderRadius: WIDTH(8),
  },
  title: {
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
    color: R.colors.white,
  },
});
