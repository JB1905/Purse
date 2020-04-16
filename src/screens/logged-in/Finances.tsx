import React, { useState, useEffect } from 'react';
import { RefreshControl, View, TouchableOpacity, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useTheme } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import Splash from '../../components/Splash';
import ListItem from '../../components/ListItem';

import { getDataForDay, getCurrentUser } from '../../api';

import { LoggedInProps } from '../../types/Navigation';

const Finances: React.FC<LoggedInProps<'Finances'>> = ({ navigation }) => {
  const { colors } = useTheme();

  const [data, setData] = useState<firebase.firestore.DocumentData[]>(null);

  const [dataFor, setDataFor] = useState();
  const [day, setDay] = useState(Date.now());
  const [dates, setDates] = useState([]);

  return (
    <Agenda
      items={{}}
      refreshControl={
        <RefreshControl
          tintColor={colors.primary}
          refreshing={null}
          onRefresh={null}
        />
      }
      renderItem={() => <View />}
      renderEmptyDate={() => <View />}
      // rowHasChanged={(r1, r2) => {
      //   console.log(r1, r2);
      // }}
      theme={{
        calendarBackground: colors.card,
        selectedDayBackgroundColor: colors.primary,
        todayTextColor: colors.primary,
      }}
    />
  );
};

export default Finances;
