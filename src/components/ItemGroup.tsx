import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation, useTheme } from '@react-navigation/native';

interface Props {
  readonly title: string;
  readonly items: any[];
}

const ItemGroup: React.FC<Props> = ({ title, items, style }) => {
  const { colors } = useTheme();

  const navigation = useNavigation();

  return (
    <View style={style}>
      <Text
        style={StyleSheet.flatten([
          { color: colors.text },
          styles.groupTitleStyle,
        ])}
      >
        {title}
      </Text>

      <View style={styles.groupContainerStyle}>
        {items.map(({ title, screen }, index) => (
          <ListItem
            key={title}
            bottomDivider={index !== items.length - 1}
            onPress={() => navigation.navigate(screen)}
            containerStyle={{
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={{ color: colors.text }}>
                {title}
              </ListItem.Title>
            </ListItem.Content>

            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // TODO rename
  groupTitleStyle: {
    marginBottom: 8,
    marginHorizontal: 15,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 13,
    opacity: 0.5,
  },
  // TODO rename
  groupContainerStyle: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default ItemGroup;
