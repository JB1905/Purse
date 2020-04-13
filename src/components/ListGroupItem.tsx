import React from 'react';
import { ListItem, ListItemProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from './Icon';

const ListGroupItem: React.FC<ListItemProps> = ({
  titleStyle,
  subtitleStyle,
  containerStyle,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <ListItem
      {...props}
      containerStyle={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
      titleStyle={{ color: colors.text }}
      rightIcon={<Icon name="arrow-forward" color={colors.border} size={18} />}
      Component={
        Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback
      }
    />
  );
};

export default ListGroupItem;
