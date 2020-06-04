import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar, ListItem, ListItemProps } from 'react-native-elements';
import gravatar from 'gravatar';

import Icon from './Icon';

interface Props extends ListItemProps {
  readonly data: any;
}

const ProfileCard: React.FC<Props> = ({ data, ...props }) => {
  const { colors } = useTheme();

  return (
    <ListItem
      {...props}
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
      rightIcon={<Icon name="arrow-forward" color={colors.border} size={18} />}
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
      style={{
        // borderWidth: StyleSheet.hairlineWidth,
        // borderColor: colors.border,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 12,
        overflow: 'hidden',
      }}
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
    />
  );
};

export default ProfileCard;
