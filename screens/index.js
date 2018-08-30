import React, { Component } from 'react';
import {
  createTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import SignIn from './LoggedOut/SignIn';
import SignUp from './LoggedOut/SignUp';
import LoggedIn from './LoggedOut/LoggedIn';

import Home from './LoggedIn/Home';
import Charts from './LoggedIn/Charts';
import Categories from './LoggedIn/Categories';
import Add from './LoggedIn/Add';

export const SignedOut = createStackNavigator({
  Purse: {
    screen: LoggedIn,
    navigationOptions: {
      title: 'Purse'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  }
});

export const SignedIn = createTabNavigator({
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
  }
});

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};
