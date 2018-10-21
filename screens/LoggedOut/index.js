import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

export const SignedOut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    },
    Reset: {
      screen: ResetPassword
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    cardStyle: { backgroundColor: '#fdfdfd' }
  }
);
