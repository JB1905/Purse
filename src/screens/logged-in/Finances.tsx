import React from 'react';
import { RefreshControl } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

// import { DataList } from '../../containers/DataList';

import type { LoggedInProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';

const Finances: React.FC<LoggedInProps<'Finances'>> = ({ navigation }) => {
  const { colors } = useTheme();

  useFirestoreConnect([Collection.Data, Collection.Categories]);

  const { data, categories } = useSelector((state: any) => ({
    data: state.firestore.ordered.data,
    categories: state.firestore.ordered.categories,
  }));

  return (
    <Agenda
      // items={data}
      refreshControl={
        <RefreshControl
          tintColor={colors.primary}
          refreshing={null}
          onRefresh={null}
        />
      }
      // renderEmptyDate={() => <DataList data={data} />}
      // renderEmptyDate={() => <View />}
      theme={{
        calendarBackground: colors.card,
        selectedDayBackgroundColor: colors.primary,
        todayTextColor: colors.primary,
      }}
    />
  );
};

export default Finances;
