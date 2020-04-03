import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, ListItemProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

interface Props extends ListItemProps {}

export default ({
  titleStyle,
  subtitleStyle,
  containerStyle,
  ...props
}: Props) => {
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
    />
  );
};
