import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Today from './Today';
import Calendar from './Calendar';
import Categories from './Categories';
import Add from './Add';
import Settings from './Settings';

export const SignedIn = createBottomTabNavigator(
  {
    Today: today,
    Calendar: calendar,
    Categories: categories
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Today') iconName = 'ios-home';
        else if (routeName === 'Calendar') iconName = 'ios-calendar';
        else if (routeName === 'Categories') iconName = 'ios-list-box';

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#5ac59a',
      inactiveTintColor: 'gray'
    }
  }
);
