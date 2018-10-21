import React from 'react';
import { createTabNavigator, createSwitchNavigator } from 'react-navigation';

import { SignedOut } from './LoggedOut';
import { SignedIn } from './LoggedIn';

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
