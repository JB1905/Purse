import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props extends ViewProps {
  spaces?: boolean;
}

const Box: React.FC<Props> = ({ children, spaces = true, style, ...props }) => {
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

export default Box;
