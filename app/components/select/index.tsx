import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import R from '@assets/R';
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@configs';
import { CheckIcon, ISelectProps, Select } from 'native-base';

interface ISelectItem {
  label: string;
  value: string;
}

interface Props extends ISelectProps {
  data: ISelectItem[];
  title?: string;
  customContainerStyle?: ViewStyle;
  defaultValue?: string;
  onChangeValue: (val: string) => void;
}

const SelectComponent = (props: Props) => {
  const {
    data,
    title,
    customContainerStyle,
    onChangeValue,
    defaultValue,
    ...otherProps
  } = props;

  const [selectedValue, setSelectedValue] = useState(defaultValue ?? '');

  useEffect(() => {
    setSelectedValue(defaultValue ?? '');
  }, [defaultValue]);

  const handleChange = (val: string) => {
    setSelectedValue(val);

    onChangeValue(val);
  };

  return (
    <View style={[styles.container, customContainerStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Select
        selectedValue={selectedValue}
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        borderRadius={WIDTH(4)}
        placeholder="Chọn giá trị"
        fontSize={getFontSize(16)}
        onValueChange={handleChange}
        {...otherProps}>
        {data.map(item => (
          <Select.Item label={item?.label} value={item?.value} />
        ))}
      </Select>
    </View>
  );
};

export default SelectComponent;

const styles = StyleSheet.create({
  title: {
    color: R.colors.black0,
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
    marginBottom: HEIGHT(5),
  },
  container: {
    width: WIDTH(343),
    alignSelf: 'center',
  },
  icon: {
    marginRight: WIDTH(8),
  },
});
