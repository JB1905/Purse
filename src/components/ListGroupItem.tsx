import React from 'react';
import { ListItem, ListItemProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Icon from './Icon';

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
      containerStyle={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
      titleStyle={{ color: colors.text }}
      rightIcon={
        <Icon name="ios-arrow-forward" color={colors.border} size={18} />
      }
    />
  );
};
