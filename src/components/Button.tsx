import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Button as BaseButton, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Button = ({
  type = 'solid',
  containerStyle,
  buttonStyle,
  titleStyle,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  const isClear = type === 'clear';

  return (
    <BaseButton
      {...props}
      type={type}
      background={TouchableNativeFeedback.Ripple(colors.background)}
      useForeground={isClear}
      containerStyle={StyleSheet.flatten([
        containerStyle,
        { marginVertical: 0 },
        // { marginVertical: isClear ? 0 : 14 },
      ])}
      buttonStyle={StyleSheet.flatten([
        buttonStyle,
        { backgroundColor: isClear ? 'transparent' : colors.primary },
      ])}
      titleStyle={StyleSheet.flatten([
        titleStyle,
        {
          color: isClear ? colors.primary : '#fff',
          fontWeight: isClear ? '400' : '500',
          paddingBottom: isClear ? 0 : 3,
        },
      ])}
    />
  );
};

export default Button;
