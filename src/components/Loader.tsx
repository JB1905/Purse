import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { useTheme } from '@react-navigation/native';

interface Props extends ViewProps, ActivityIndicatorProps {}

export default ({ style, size = 'large', ...props }: Props) => {
  const colorScheme = useColorScheme();

  const { colors } = useTheme();

  return (
    <View
      style={StyleSheet.flatten([
        style,
        {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colorScheme === 'dark' ? '#000e' : '#fffe',
        },
      ])}
    >
      <ActivityIndicator {...props} size={size} color={colors.primary} />
    </View>
  );
};
