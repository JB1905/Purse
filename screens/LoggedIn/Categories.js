import React, { useState, useEffect } from 'react';
import { ActionSheetIOS, View, Alert, Button } from 'react-native';
import { FirestoreCollection } from 'react-firestore';
import { Ionicons } from '@expo/vector-icons';

import { Content } from '../../components/Content';
import { Loader } from '../../components/Loader';
import { List, Item, Name, Options } from '../../components/CategoriesList';
import { Splash } from '../../components/Splash';

import { getUser } from '../../helpers/getUser';

import { deleteCategory } from '../../api';

export default function Categories({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(res => setUser(res));
  }, []);

  const renderData = data => {
    const removeCategory = item => {
      Alert.alert(`This will remove "${item.name}" with all it's data`, null, [
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => deleteCategory(item.id)
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]);
    };

    const actions = item => {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Edit', 'Remove', 'Cancel'],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 2,
          title: `Edit or remove: ${item.name}`
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            navigation.navigate('CategoryManager', { item });
          } else if (buttonIndex === 1) {
            removeCategory(item);
          }
        }
      );
    };

    return (
      <List
        data={data}
        numColumns={2}
        keyExtractor={data => data.id}
        contentContainerStyle={{ paddingBottom: 13 }}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            activeScale={0.96}
            color={item.color}
            onPress={() => {
              navigation.navigate('Category', {
                data: item
              });
            }}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Ionicons
                style={{ flex: 1 }}
                name={item.icon}
                color="#fff"
                size={26}
              />

              <Options onPress={() => actions(item)}>
                <Ionicons
                  style={{ flex: 1, marginTop: 2 }}
                  name="ios-more"
                  color="#fff"
                  size={20}
                />
              </Options>
            </View>

            <Name numberOfLines={1}>{item.name}</Name>
          </Item>
        )}
      />
    );
  };

  const notFound = () => (
    <Splash message="No any categories">
      <Button
        onPress={() => navigation.navigate('CategoryManager')}
        title="Add them here"
        color="#5ac59a"
      />
    </Splash>
  );

  return (
    <FirestoreCollection
      path={'categories'}
      filter={['user', '==', user]}
      render={({ isLoading, data }) => (
        <Content contrast>
          {isLoading ? <Loader /> : data.length ? renderData(data) : notFound()}
        </Content>
      )}
    />
  );
}
