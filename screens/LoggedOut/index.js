import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

export const SignedOut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: { headerTransparent: true }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: ({ navigation }) => ({
        gesturesEnabled: false,
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('SignIn')}
            color="#5ac59a"
            title="Cancel"
          />
        )
      })
    },
    Reset: {
      screen: ResetPassword,
      navigationOptions: ({ navigation }) => ({
        gesturesEnabled: false,
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('SignIn')}
            color="#5ac59a"
            title="Cancel"
          />
        )
      })
    }
  },
  {
    mode: 'modal',
    cardStyle: { backgroundColor: '#fdfdfd' }
  }
);
