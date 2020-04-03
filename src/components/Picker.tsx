import React from 'react';
import { Picker, PickerProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default ({ ...props }: PickerProps) => {
  const { colors } = useTheme();

  return (
    <Picker
      {...props}
      itemStyle={{ color: colors.text }}
      style={{
        maxWidth: 440,
        width: '100%',
      }}
    />
  );
};
