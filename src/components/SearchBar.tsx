import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import {
  SearchBar as BaseSearchBar,
  SearchBarProps,
} from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const SearchBar: React.FC<SearchBarProps> = ({
  containerStyle,
  inputContainerStyle,
  // cancelButtonTitle = 'Cancel',
  // clearButtonMode = 'never',
  leftIconContainerStyle,
  showCancel = true,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <BaseSearchBar
      {...props}
      platform={Platform.OS === 'ios' ? 'ios' : 'android'}
      containerStyle={{
        backgroundColor: 'transparent',
        // alignSelf: 'center',
        // maxWidth: 500,
      }}
      inputContainerStyle={{ backgroundColor: colors.border }}
      inputStyle={{ color: colors.text }}
      cancelButtonProps={{ color: colors.primary }}
    />
  );
};

// const styles = StyleSheet.create({});
export default SearchBar;
