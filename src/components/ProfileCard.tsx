import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

interface Props {
  readonly title: string;
  readonly items: any;
}

export const ProfileCard: React.FC<Props> = ({ data }) => {
  return (
    <View>
      <Avatar
        title={`${data?.name[0] ?? ''}${data?.surname[0] ?? ''}`}
        // source={{
        // uri: gravatar.url(`${data.email}`, { protocol: 'https' }),
        // }}
        size="large"
        rounded
      />
    </View>
  );
};
