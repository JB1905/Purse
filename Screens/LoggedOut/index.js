import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Main';

export const SignedOut = createStackNavigator(
  {
    Main: {
      screen: Main,
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
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#fdfdfd' }
  }
);
