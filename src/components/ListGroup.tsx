import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
// import { useTheme } from '@react-navigation/native';

const ListGroup: React.FC<ViewProps> = ({ children, style, ...props }) => {
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

export default ListGroup;
