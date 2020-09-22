import React, { Suspense, lazy } from 'react';
import { RefreshControl } from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import Loader from '../../components/Loader';

import type { LoggedInProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';
import { Route } from '../../enums/Route';

const Container = lazy(() => import('../../components/Container'));
const Button = lazy(() => import('../../components/Button'));

const Categories: React.FC<LoggedInProps<Route.CATEGORIES>> = ({
  navigation,
}) => {
  useFirestoreConnect([
    {
      collection: Collection.Categories,
      // where: ['user', '==', 'FXZfDuVLcpTg1bJs9eLppHnCNnI3'],
    },
  ]);

  const categories = useSelector(
    (state: any) => state.firestore.ordered.categories
  );

  return categories ? (
    <Suspense fallback={<Loader />}>
      <Container
        scrollEnabled
        refreshControl={<RefreshControl refreshing={false} onRefresh={null} />}
      >
        {categories.map(({ id, name, ...data }) => (
          <Button
            title={name}
            onPress={() =>
              navigation.navigate(Route.CATEGORY, { id, name, ...data })
            }
            key={id}
          />
        ))}
      </Container>
    </Suspense>
  ) : (
    <Loader />
  );
};

export default Categories;
