import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import {
  Input as BaseInput,
  InputProps,
  ThemeContext,
} from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { FieldError } from 'react-hook-form';

import Icon from './Icon';

interface Props extends InputProps {
  readonly flat?: boolean;
  readonly error?: FieldError;
}

const Input: React.FC<Props> = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  flat,
  error,
  ...props
}) => {
  const { colors } = useTheme();

  const { theme } = useContext(ThemeContext);

  return (
    <BaseInput
      {...props}
      leftIcon={
        error &&
        flat && (
          <Icon
            name="warning"
            // size={20}
            color="red"
            style={{ marginRight: 10 }}
          />
        )
      }
      containerStyle={StyleSheet.flatten([
        containerStyle,
        flat
          ? {
              paddingLeft: 0,
              paddingRight: 0,
              // marginVertical: 10,
            }
          : {
              paddingHorizontal: 0,
              marginBottom: -12, // TODO
              backgroundColor: colors.background,
              padding: 0,
            },
      ])}
      inputContainerStyle={StyleSheet.flatten([
        inputContainerStyle,
        flat
          ? {
              paddingHorizontal: 20,
              backgroundColor: colors.card,
              borderTopColor: colors.border,
              borderBottomColor: colors.border,
              borderTopWidth: StyleSheet.hairlineWidth,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }
          : {
              height: 45,
              paddingHorizontal: 10,
              borderColor: error ? theme.colors.error : colors.border,
              borderWidth: 2,
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderRadius: 10,
            },
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

export default Input;
