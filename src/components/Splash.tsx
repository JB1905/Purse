import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import { Children } from '../types/Children';

interface Props {
  title?: string;
  message?: string;
  children?: Children;
}

export default ({ title, message, children }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {title && (
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500',
            textAlign: 'center',
            lineHeight: 30,
            marginBottom: 8,
            color: colors.text,
          }}
        >
          {title}
        </Text>
      )}

      {message && (
        <Text
          h3
          h3Style={{
            fontSize: 16,
            color: colors.text,
            textAlign: 'center',
            opacity: 0.5,
            lineHeight: 24,
          }}
        >
          {message}
        </Text>
      )}

      {children}
    </View>
  );
};