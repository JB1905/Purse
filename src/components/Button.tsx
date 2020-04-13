import React from 'react';
import { StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const D: React.FC<ButtonProps> = ({
  type = 'solid',
  buttonStyle,
  titleStyle,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Button
      {...props}
      type={type}
      background={TouchableNativeFeedback.Ripple(colors.background)}
      useForeground={type === 'clear'}
      buttonStyle={StyleSheet.flatten([
        buttonStyle,
        {
          backgroundColor: type === 'clear' ? 'transparent' : colors.primary,
        },
        Platform.OS === 'ios' && { borderRadius: 10 },
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

export default D;
