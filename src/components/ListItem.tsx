import React from 'react';
import {
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import { ListItem as BaseListItem, ListItemProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const ListItem: React.FC<ListItemProps> = ({
  titleStyle,
  subtitleStyle,
  containerStyle,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <BaseListItem
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

export default ListItem;
