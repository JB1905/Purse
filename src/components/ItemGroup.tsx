import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Icon from './Icon';

interface Props {
  readonly title: string;
  readonly items: any[];
}

const ItemGroup: React.FC<Props> = ({ title, items }) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginVertical: 12, marginHorizontal: 16 }}>
      <Text
        style={{
          marginBottom: 8,
          marginHorizontal: 15,
          color: colors.text,
          textTransform: 'uppercase',
          fontWeight: '500',
          fontSize: 12,
          opacity: 0.5,
        }}
      >
        {title}
      </Text>

      <View style={{ borderRadius: 12, overflow: 'hidden' }}>
        {items.map(({ title }, index) => (
          <ListItem
            title={title}
            titleStyle={{ color: colors.text }}
            bottomDivider={index !== items.length - 1}
            containerStyle={{
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
            rightIcon={
              <Icon name="arrow-forward" color={colors.border} size={18} />
            }
          />
        ))}
      </View>
    </View>
  );
};

export default ItemGroup;
