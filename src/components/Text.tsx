import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const I: React.FC<TextProps> = ({ children, style, ...props }) => {
  const { colors } = useTheme();

  return (
    <Text
      {...props}
      style={StyleSheet.flatten([style, { color: colors.text }])}
    >
      {children}
    </Text>
  );
};

export default I;
