import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import Container from '../../components/Container';
import Button from '../../components/Button';
import Splash from '../../components/Splash';
import Loader from '../../components/Loader';

import { getCurrentUser, getCategories } from '../../api';

import { LoggedInProps } from '../../types/Navigation';

const Categories: React.FC<LoggedInProps<'Categories'>> = ({ navigation }) => {
  const [data, setData] = useState<firebase.firestore.DocumentData[]>(null);

  useEffect(() => {
    getCategories(getCurrentUser()?.uid).then((res) => setData(res));
  }, []);

  return data ? (
    <Container
      scrollEnabled
      refreshControl={<RefreshControl refreshing={false} onRefresh={null} />}
    >
      {data.length > 0 ? (
        data.map(([id, value]: any) => (
          <Button
            title={value.name}
            onPress={() => {
              navigation.navigate('Category', {
                name: value.name,
                id,
              });
            }}
            key={id}
          />
        ))
      ) : (
        <Splash
          title="Categories not found"
          message="There is no categories for your data yet"
        >
          <Button
            title="Add them here"
            onPress={() => navigation.navigate('CategoryManager')}
            type="clear"
          />
        </Splash>
      )}
    </Container>
  ) : (
    <Loader />
  );
};

export default Categories;
