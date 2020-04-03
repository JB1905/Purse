import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';

import { Children } from '../types/Children';

interface Props extends TextProps {
  children: Children;
}

export default ({ children, style, ...props }: Props) => (
  <Text
    {...props}
    style={StyleSheet.flatten([
      style,
      {
        textAlign: 'center',
        fontWeight: '500',
        color: '#f22828',
      },
    ])}
  >
    {children}
  </Text>
);
