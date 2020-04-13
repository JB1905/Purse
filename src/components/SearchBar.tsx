import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SearchBar, SearchBarProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const U: React.FC<SearchBarProps> = ({
  containerStyle,
  inputContainerStyle,
  cancelButtonTitle = 'Cancel',
  clearButtonMode = 'never',
  leftIconContainerStyle,
  showCancel = true,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <SearchBar
      {...props}
      platform={Platform.OS === 'ios' ? 'ios' : 'android'}
      containerStyle={{ backgroundColor: 'transparent' }}
      inputContainerStyle={{
        backgroundColor: colors.border,
      }}
      inputStyle={{
        color: colors.text,
      }}
      cancelButtonProps={{
        color: colors.primary,
      }}
      // showCancel={showCancel}
      // searchIcon={
      //   <Icon
      //     type="ionicon"
      //     name="ios-search"
      //     color={colors.text}
      //     style={{ opacity: 0.6, paddingTop: 1 }}
      //     size={20}
      //   />
      // }
      // cancelButtonTitle={cancelButtonTitle}
      // clearButtonMode={clearButtonMode}
      // containerStyle={StyleSheet.flatten([
      //   containerStyle,
      //   {
      //     backgroundColor: 'transparent',
      //     borderTopWidth: 0,
      //     borderBottomWidth: 0,
      //     paddingLeft: 0,
      //     paddingRight: 0,
      //     paddingTop: 0
      //   }
      // ])}
      // inputContainerStyle={StyleSheet.flatten([
      //   inputContainerStyle,
      //   {
      //     marginHorizontal: 20,
      //     backgroundColor: colors.border,
      //     borderRadius: 10
      //   }
      // ])}
      // leftIconContainerStyle={StyleSheet.flatten([
      //   leftIconContainerStyle,
      //   {
      //     marginLeft: 12
      //   }
      // ])}
    />
  );
};

export default U;
