import React from 'react';
import { Text, TextProps } from 'react-native-elements';

interface Props extends TextProps {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  // const { colors } = useTheme();

  return (
    <Text
      style={{
        textAlign: 'center',
        fontWeight: '500',
      }}
    >
      {message}
    </Text>
  );
};
