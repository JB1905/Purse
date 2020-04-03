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

  // useEffect(() => {
  //   const dayStart = new Date(day);
  //   const dayEnd = new Date(day);

  //   dayStart.setHours(1, 0, 0, 0);
  //   dayEnd.setHours(25, 0, 0, 0);

  //   getDataForDay(
  //     getCurrentUser()?.uid,
  //     'incomes',
  //     dayStart,
  //     dayEnd
  //   ).then(res => setData(res));
  // }, [day]);

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

//data ?
// data.length > 0 ? (
//   <SwipeListView
//     data={data}
//     scrollEnabled={true}
//     refreshControl={
//       <RefreshControl
//         tintColor={colors.primary}
//         refreshing={null}
//         onRefresh={null}
//       />
//     }
//     keyExtractor={item => item.id}
//     renderItem={({ item }) => (
//       <ListItem title={item.title} subtitle={item.value} leftIcon={null} />
//     )}
//     renderHiddenItem={(data, rowMap) => (
//       <View>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('FinanceManager', {
//               ...data.item
//             });
//           }}
//         >
//           <Text>Edit</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={null}>
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     )}
//     // leftOpenValue={75}
//     rightOpenValue={-150}
//   />
// ) : (
//   <Splash title="Data not found" message="There is no incomes for this day">
//     <Button
//       title="Add it here"
//       type="clear"
//       onPress={() => {
//         navigation.navigate('FinanceManager', {
//           date: day
//         });
//       }}
//     />
//   </Splash>
// )
// ) : (
// <Loader />
// )}

export default Finances;
