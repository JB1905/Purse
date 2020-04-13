import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, InputProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { FieldError } from 'react-hook-form';

interface Props extends InputProps {
  flat?: boolean;
  error?: FieldError;
}

const X: React.FC<Props> = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  flat,
  error,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Input
      {...props}
      containerStyle={StyleSheet.flatten([
        containerStyle,
        flat
          ? {
              paddingLeft: 0,
              paddingRight: 0,
            }
          : {
              backgroundColor: colors.background,
              borderColor: colors.border,
              borderWidth: 2,
              borderRadius: 10,
              padding: 0,
            },
      ])}
      inputContainerStyle={StyleSheet.flatten([
        inputContainerStyle,
        {
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        flat
          ? {
              paddingHorizontal: 20,
              backgroundColor: colors.card,
              borderTopColor: colors.border,
              borderBottomColor: colors.border,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
            }
          : null,
      ])}
      labelStyle={StyleSheet.flatten([
        flat
          ? {
              textTransform: 'uppercase',
              fontWeight: '500',
              fontSize: 14,
              color: colors.text,
              opacity: 0.5,
              marginVertical: 6,
              marginHorizontal: 20,
            }
          : {
              display: 'none',
            },
      ])}
      // placeholderTextColor={colors.text}
      inputStyle={StyleSheet.flatten([
        inputStyle,
        {
          color: colors.text,
        },
        flat
          ? {
              paddingVertical: 12,
              fontSize: 18,
            }
          : {
              paddingHorizontal: 2,
            },
      ])}
    />
  );
};

export default X;
