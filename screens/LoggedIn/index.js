import React from 'react';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import CategoryManager from './CategoryManager';
import Categories from './Categories';
import Category from './Category';

import FinanceManager from './FinanceManager';
import Calendar from './Calendar';
import Analytics from './Analytics';

import Settings from './Settings';
import Account from './Account';


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
