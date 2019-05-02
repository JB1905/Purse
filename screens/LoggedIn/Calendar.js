import React, { useState } from 'react';
import { Agenda } from 'react-native-calendars';

import Finances from './Finances';

export default function Calendar({ navigation }) {
  const [day, setDay] = useState(new Date().getTime());
  const [dates, setDates] = useState([]);

  return (
    <Agenda
      futureScrollRange={50}
      renderEmptyData={() => <Finances day={day} navigation={navigation} />}
      onDayPress={e => setDay(e.timestamp)}
      theme={{
        selectedDayBackgroundColor: '#5ac59a',
        todayTextColor: '#5ac59a'
      }}
    />
  );
}
