import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface Props extends ViewProps {
  readonly spaces?: number;
}

export const Box: React.FC<Props> = ({
  spaces = 8,
  style,
  children,
  ...props
}) => (
  <View
    {...props}
    style={StyleSheet.flatten([style, { marginVertical: spaces }])}
  >
    {children}
  </View>
);
