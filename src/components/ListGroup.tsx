import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
// import { useTheme } from '@react-navigation/native';

interface Props extends ViewProps {
  children: any;
}

export default ({ children, style, ...props }: Props) => {
  // const { colors } = useTheme();

  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        style,
        {
          marginTop: 15,
          marginBottom: 15,
          overflow: 'hidden',
          borderRadius: 10,
          marginHorizontal: 16,
        },
      ])}
    >
      {children}
    </View>
  );
};
