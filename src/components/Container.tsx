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
  readonly spaces?: boolean;
  readonly full?: boolean;
  readonly keyboard?: boolean;
}

const Container: React.FC<Props> = ({
  contentContainerStyle,
  keyboard = false,
  scrollEnabled = false,
  spaces = false,
  full = false,
  ...props
}) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="padding"
    enabled={keyboard}
  >
    <ScrollView
      {...props}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={StyleSheet.flatten([
        contentContainerStyle,
        {
          flexGrow: 1,
          // paddingHorizontal: spaces ? 30 : 0,
          // paddingVertical: 20,
          justifyContent: full ? 'center' : 'flex-start',
          flex: full ? 1 : 0,
          // backgroundColor: colors.card,
          maxWidth: full ? 500 : undefined,
          alignSelf: full ? 'center' : undefined,
          width: full ? '100%' : undefined,
        },
      ])}
    />
  </KeyboardAvoidingView>
);

// const styles = StyleSheet.create({});
export default Container;
