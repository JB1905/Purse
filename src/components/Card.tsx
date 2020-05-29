import React from 'react';
import { StyleSheet } from 'react-native';
import { Card as BaseCard, CardProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Card: React.FC<CardProps> = ({ children, containerStyle, ...props }) => {
  const { colors } = useTheme();

  return (
    <BaseCard
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
    </BaseCard>
  );
};

export default Card;
