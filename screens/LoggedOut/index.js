import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

export const SignedOut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Purse'
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign up'
      }
    },
    Reset: {
      screen: ResetPassword,
      navigationOptions: {
        title: 'Reset password'
      }
    }
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#fdfdfd' }
  }
);
