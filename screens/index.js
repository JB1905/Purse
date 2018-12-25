import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import { SignedOut } from './LoggedOut';
import { SignedIn } from './LoggedIn';

export const RootNavigator = (signedIn = false) =>
  createSwitchNavigator(
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
