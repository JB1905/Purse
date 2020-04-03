import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ScrollViewProps,
  KeyboardAvoidingView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Children } from '../types/Children';

interface Props extends ScrollViewProps {
  children: Children;
  spaces?: boolean;
  full?: boolean;
}

const Container = ({
  contentContainerStyle,
  scrollEnabled = false,
  spaces = false,
  full = false,
  ...props
}: Props) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      {...props}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={StyleSheet.flatten([
        contentContainerStyle,
        {
          flexGrow: 1,
          paddingHorizontal: spaces ? 30 : 0,
          paddingVertical: 10,
          justifyContent: full ? 'center' : 'flex-start',
          flex: full ? 1 : 0,
          // backgroundColor: colors.card,
          // maxWidth: full ? 400 : undefined,
          alignSelf: full ? 'center' : undefined,
          width: full ? '100%' : undefined,
        },
      ])}
    />
  );
};

export default ({
  keyboard = false,
  ...props
}: Props & { keyboard?: boolean }) => {
  return keyboard ? (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Container {...props} />
    </KeyboardAvoidingView>
  ) : (
    <Container {...props} />
  );
};
