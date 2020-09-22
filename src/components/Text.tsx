import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as BaseText, TextProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
  const { colors } = useTheme();

  return (
    <BaseText
      {...props}
      style={StyleSheet.flatten([style, { color: colors.text }])}
    >
      {children}
    </BaseText>
  );
};

// const styles = StyleSheet.create({});
export default Text;
