import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-elements';

const M: React.FC<TextProps> = ({ children, style, ...props }) => (
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

export default M;
