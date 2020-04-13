import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const C: React.FC<ViewProps> = ({ children, style, ...props }: Props) => (
  <View {...props} style={StyleSheet.flatten([style, { marginVertical: 6 }])}>
    {children}
  </View>
);

export default C;
