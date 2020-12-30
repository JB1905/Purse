import React from 'react';
import { RefreshControl } from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import Loader from '../../components/Loader';
import FallbackScreen from '../../components/FallbackScreen';
import Container from '../../components/Container';
import Button from '../../components/Button';

import type { LoggedInProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';
import { Route } from '../../enums/Route';

const Categories = ({ navigation }: LoggedInProps<Route.CATEGORIES>) => {
  const uid = useSelector((state) => state.firebase.auth.uid);

  useFirestoreConnect([
    {
      collection: Collection.Categories,
      where: ['user', '==', uid],
    },
  ]);

  const categories = useSelector((state) => state.firestore.ordered.categories);

  if (!categories) {
    return <Loader />;
  }

  return (
    <Container
      scrollEnabled
      // TODO
      refreshControl={<RefreshControl refreshing={false} onRefresh={null} />}
    >
      {categories.length > 0 ? (
        categories.map(({ id, name, ...data }) => (
          <Button
            title={name}
            onPress={() =>
              navigation.navigate(Route.CATEGORY, { id, name, ...data })
            }
            key={id}
          />
        ))
      ) : (
        // TODO: update title & message
        <FallbackScreen
          title="Categories not found"
          message="Create new category"
        />
      )}
    </Container>
  );
};

export default Categories;
