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
