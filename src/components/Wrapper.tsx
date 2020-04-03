import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { Children } from '../types/Children';

interface Props extends ViewProps {
  children: Children;
}

export default ({ children, style, ...props }: Props) => (
  <View {...props} style={StyleSheet.flatten([style, { marginVertical: 6 }])}>
    {children}
  </View>
);
