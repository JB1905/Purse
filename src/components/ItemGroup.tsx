import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  readonly title: string;
  readonly items: any;
}

export const ItemGroup: React.FC<Props> = ({ title, items }) => {
  return (
    <View>
      <Text>{title}</Text>

      {items.map(({ title }) => (
        <Text>{title}</Text>
      ))}
    </View>
  );
};
