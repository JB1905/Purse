import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Home';
import Charts from './Charts';
import Categories from './Categories';
import Add from './Add';
import Settings from './Settings';

export const SignedIn = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Charts: {
    screen: Charts,
    navigationOptions: {
      tabBarLabel: 'Charts'
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      tabBarLabel: 'Categories'
    }
  },
  Add: {
    screen: Add,
    navigationOptions: {
      tabBarLabel: 'Add'
    }
  }
});
