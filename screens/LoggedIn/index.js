import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Home';
import Charts from './Charts';
import Categories from './Categories';
import Add from './Add';
import Settings from './Settings';

export const SignedIn = createBottomTabNavigator(
  { Home, Charts, Categories, Add, Settings },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Charts') {
          iconName = `ios-stats${focused ? '' : '-outline'}`;
        } else if (routeName === 'Categories') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        } else if (routeName === 'Add') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: { activeTintColor: '#56ad97', inactiveTintColor: 'gray' }
  }
);
