import React, { useState } from 'react';
import { Agenda } from 'react-native-calendars';

import Expenses from './Expenses';

export default function Calendar({ navigation }) {
  const [day, setDay] = useState(new Date().getTime());

  return (
    <Agenda
      theme={{
        selectedDayBackgroundColor: '#5ac59a',
        todayTextColor: '#5ac59a'
      }}
      futureScrollRange={50}
      onDayPress={e => setDay(e.timestamp)}
      renderEmptyData={() => <Expenses day={day} navigation={navigation} />}
    />
  );
}
