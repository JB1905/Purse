import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import { Children } from '../types/Children';

interface Props extends TextProps {
  children: Children;
}

export default ({ children, style, ...props }: Props) => {
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
