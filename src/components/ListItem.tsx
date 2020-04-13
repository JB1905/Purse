import React from 'react';
import {
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import { ListItem, ListItemProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const L: React.FC<ListItemProps> = ({
  titleStyle,
  subtitleStyle,
  containerStyle,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <ListItem
      {...props}
      titleStyle={StyleSheet.flatten([
        titleStyle,
        {
          color: colors.text,
        },
      ])}
      subtitleStyle={StyleSheet.flatten([
        subtitleStyle,
        {
          color: colors.text,
        },
      ])}
      containerStyle={StyleSheet.flatten([
        containerStyle,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ])}
      bottomDivider
      Component={
        Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback
      }
    />
  );
};

export default L;
