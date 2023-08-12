import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import R from '@assets/R';
import { HEIGHT, WIDTH } from '@configs';

interface Props {
  title: string;
  customStyle?: ViewStyle;
  onPress: () => void;
}

const BaseButton = (props: Props) => {
  const { title, customStyle, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.container, customStyle]}
      activeOpacity={0.6}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    width: WIDTH(150),
    paddingVertical: HEIGHT(12),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.mainColor,
    borderRadius: WIDTH(8),
  },
});
