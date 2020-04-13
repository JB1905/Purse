import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const S: React.FC<CardProps> = ({ children, containerStyle, ...props }) => {
  const { colors } = useTheme();

  return (
    <Card
      {...props}
      containerStyle={StyleSheet.flatten([
        containerStyle,
        {
          backgroundColor: colors.card,
          borderRadius: 10,
          marginHorizontal: 20,
          height: 200,
        },
      ])}
    >
      {children}
    </Card>
  );
};

export default S;
