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
      /*tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )*/
    }
  },
  Charts: {
    screen: Charts,
    navigationOptions: {
      tabBarLabel: 'Charts'
      /*tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )*/
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      tabBarLabel: 'Categories'
      /*tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )*/
    }
  },
  Add: {
    screen: Add,
    navigationOptions: {
      tabBarLabel: 'Add'
      /*tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )*/
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings'
      /*tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )*/
    }
  }
});
