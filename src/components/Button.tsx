import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Button as BaseButton, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Button: React.FC<ButtonProps> = ({
  type = 'solid',
  containerStyle,
  buttonStyle,
  titleStyle,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <BaseButton
      {...props}
      type={type}
      background={TouchableNativeFeedback.Ripple(colors.background)}
      useForeground={type === 'clear'}
      containerStyle={StyleSheet.flatten([
        containerStyle,
        { marginVertical: type === 'clear' ? 0 : 14 },
      ])}
      buttonStyle={StyleSheet.flatten([
        buttonStyle,
        { backgroundColor: type === 'clear' ? 'transparent' : colors.primary },
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

export default Button;
