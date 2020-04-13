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

const O: React.FC<Props> = ({ style, size = 'large', ...props }) => {
  // const colorScheme = useColorScheme();

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
          backgroundColor: colors.background,
          // opacity: 0.9,
        },
      ])}
    >
      <ActivityIndicator {...props} size={size} color={colors.primary} />
    </View>
  );
};

export default O;
