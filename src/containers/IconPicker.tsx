import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

import Icon from '../components/Icon';

interface Props {
  readonly icons: any;
  readonly selectedIcon: any;
  readonly onSelect: any;
}

const IconPicker: React.FC<Props> = ({ icons, selectedIcon, onSelect }) => {
  const { colors } = useTheme();

  return (
    <FlatList
      data={Object.entries(icons)}
      numColumns={5}
      keyExtractor={(item) => item}
      contentContainerStyle={{
        alignItems: 'center',
        paddingVertical: 12,
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            width: 48,
            height: 48,
            margin: 10,
            justifyContent: 'center',
            backgroundColor: colors.background, // colors.border
            borderRadius: 10,
          }}
          onPress={() => onSelect(item[0])}
        >
          <Icon name={item[0]} color={colors.primary} size={30} />
        </TouchableOpacity>
      )}
    />
  );
};

export default IconPicker;
