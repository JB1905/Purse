import React from 'react';
import { ListItem, ListItemProps, Icon } from 'react-native-elements';
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
      leftAvatar={
        <Avatar
          title={`${data?.name[0] ?? ''}${data?.surname[0] ?? ''}`}
          source={{
            uri: gravatar.url(`${data.email}`, { protocol: 'https' }),
          }}
          size="large"
          rounded
        />
      }
      rightIcon={
        <Icon name="ios-arrow-forward" color={colors.border} size={18} />
      }
      onPress={() => navigation.navigate('User')}
      containerStyle={{
        backgroundColor: colors.card,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.01,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      title={`${data.name} ${data.surname}`}
      titleStyle={{
        marginVertical: 3,
        color: colors.text,
        fontWeight: '500',
        fontSize: 22,
      }}
      subtitle={data.email}
      subtitleStyle={{
        marginVertical: 3,
        color: colors.text,
        opacity: 0.5,
      }}
    />
  );
};
