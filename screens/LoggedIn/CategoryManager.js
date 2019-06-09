import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import NativeColorPicker from 'native-color-picker';

import { KeyboardContent } from '../../components/Content';
import { Input } from '../../components/Input';
import { SegmentedControl } from '../../components/SegmentedControl';
import { Tabs } from '../../components/Tabs';
import { GlyphPicker } from '../../components/GlyphPicker';
import { Error } from '../../components/Error';
import { Btn } from '../../components/Button';

import { colors } from '../../constants/colors';
import { icons } from '../../constants/icons';

import { getUser } from '../../helpers/getUser';

import { addCategory, updateCategory } from '../../api';

export default function CategoryManager({ navigation }) {
  const { id, ...params } = navigation.getParam('item') || {};

  const [color, setColor] = useState(params.color || '');
  const [name, setName] = useState(params.name || '');
  const [icon, setIcon] = useState(params.icon || '');

  const [user, setUser] = useState(null);
  const [section, setSection] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser().then(res => setUser(res));
  }, []);

  const update = () => {
    updateCategory(id, {
      name,
      color,
      icon
    }).then(() => {
      Alert.alert(`Updated category: ${name}`, null, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Categories')
        }
      ]);
    });
  };

  const add = () => {
    addCategory({
      user,
      name,
      color,
      icon
    }).then(() => {
      Alert.alert(`Added category: ${name}`, null, [
        {
          text: 'Add more',
          onPress: () => {
            setName('');
            setColor('');
            setIcon('');
          }
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Main')
        }
      ]);
    });
  };

  const submit = () => {
    if (name && color && icon) {
      id ? update() : add();
    } else {
      setError('Name, colour and glyph are required.');
    }
  };

  return (
    <KeyboardContent>
      <Input
        placeholder="Category name e.g: Food"
        onChangeText={setName}
        value={name}
      />

      <SegmentedControl
        values={['Colour', 'Glyph']}
        onChange={e => setSection(e.nativeEvent.selectedSegmentIndex)}
        selectedIndex={0}
        tintColor="#5ac59a"
      />

      <Tabs>
        {section === 0 ? (
          <NativeColorPicker
            sort
            itemSize="46"
            colors={colors}
            marker="border"
            markerStyle="#fff"
            contentContainerStyle={{ alignItems: 'center' }}
            onSelect={item => setColor(item)}
            selectedColor={color}
          />
        ) : (
          <GlyphPicker
            icons={icons}
            selected={icon}
            onSelect={e => setIcon(e)}
          />
        )}
      </Tabs>

      {error && <Error>{error}</Error>}

      <Btn
        title={`${id ? 'Update' : 'Add'} category`}
        color="#fdfdfd"
        onPress={submit}
      />
    </KeyboardContent>
  );
}
