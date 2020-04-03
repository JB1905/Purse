import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

export default ({
  type = 'solid',
  buttonStyle,
  titleStyle,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <Button
      {...props}
      type={type}
      background={TouchableNativeFeedback.Ripple('#fff')}
      useForeground={type === 'clear'}
      buttonStyle={StyleSheet.flatten([
        buttonStyle,
        {
          backgroundColor: type === 'clear' ? 'transparent' : colors.primary,
          borderRadius: 10,
        },
      ])}
      titleStyle={StyleSheet.flatten([
        titleStyle,
        {
          color: type === 'clear' ? colors.primary : '#fff',
          fontWeight: type === 'clear' ? '400' : '500',
          paddingBottom: type === 'clear' ? 0 : 3,
        },
      ])}
    />
  );
};
