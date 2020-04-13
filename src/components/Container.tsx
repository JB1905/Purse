import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ScrollViewProps,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props extends ScrollViewProps {
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

const Z: React.FC<Props & { keyboard?: boolean }> = ({
  keyboard = false,
  ...props
}) => {
  return keyboard && Platform.OS === 'ios' ? (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Container {...props} />
    </KeyboardAvoidingView>
  ) : (
    <Container {...props} />
  );
};

export default Z;
