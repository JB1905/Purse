import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps, ThemeContext } from 'react-native-elements';

interface Props extends TextProps {
  readonly message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Text
      style={{
        paddingVertical: 6,
        color: theme.colors.error,
        textAlign: 'center',
        fontWeight: '500',
      }}
    >
      {message}
    </Text>
  );
};

// const styles = StyleSheet.create({});
export default ErrorMessage;
