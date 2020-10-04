import React from 'react';
import { RefreshControl } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

// import { DataList } from '../../components/DataList';
import FallbackScreen from '../../components/FallbackScreen';

import type { LoggedInProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';
import { Route } from '../../enums/Route';

const Finances = ({ navigation }: LoggedInProps<Route.FINANCES>) => {
  const { colors } = useTheme();

  useFirestoreConnect([Collection.Data, Collection.Categories]);

  const { data, categories } = useSelector((state) => ({
    data: state.firestore.ordered.data,
    categories: state.firestore.ordered.categories,
  }));

  return (
    <FallbackScreen
      title="This screen is not available"
      message="It will be added in the next version"
    />
  );
};

export default Finances;
