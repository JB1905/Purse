import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Children } from '../types/Children';

interface Props extends ViewProps {
  children: Children;
  spaces?: boolean;
}

export default ({ children, spaces = true, style, ...props }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        style,
        {
          backgroundColor: colors.card,
          paddingVertical: spaces ? 16 : 0,
          borderTopColor: colors.border,
          borderBottomColor: colors.border,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
        },
      ])}
    >
      {children}
    </View>
  );
};
