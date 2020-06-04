import React, { Suspense, lazy } from 'react';
import { RefreshControl } from 'react-native';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import Loader from '../../components/Loader';

import type { LoggedInProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';

const Container = lazy(() => import('../../components/Container'));
const Button = lazy(() => import('../../components/Button'));

const Categories: React.FC<LoggedInProps<'Categories'>> = ({ navigation }) => {
  // const currentUser = useSelector((state: any) => state.firebase.profile);

  // console.log(currentUser);

  useFirestoreConnect([
    {
      collection: Collection.Categories,
      // where: ['user', '==', currentUser],
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
              navigation.navigate('Category', { id, name, ...data })
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
