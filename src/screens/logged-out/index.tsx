import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useNavigation } from '@react-navigation/native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

import HeaderButton from '../../components/HeaderButton';

import type { LoggedOutParamList } from '../../types/Navigation';

const NativeStack = createNativeStackNavigator<LoggedOutParamList>();

const CancelButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <HeaderButton title="Cancel" iconName="close" onPress={navigation.goBack} />
  );
};

const SignUpScreen: React.FC = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="SignUp"
      component={SignUp}
      options={() => ({
        title: '',
        headerRight: () => Platform.OS === 'ios' && <CancelButton />,
      })}
    />
  </NativeStack.Navigator>
);

const ResetPasswordScreen: React.FC = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="ResetPassword"
      component={ResetPassword}
      options={() => ({
        title: '',
        headerRight: () => Platform.OS === 'ios' && <CancelButton />,
      })}
    />
  </NativeStack.Navigator>
);

export const LoggedOut: React.FC = () => (
  <NativeStack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      gestureEnabled: false,
      stackPresentation: Platform.OS === 'ios' ? 'formSheet' : 'push',
    }}
  >
    <NativeStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />

    <NativeStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ headerShown: Platform.OS === 'ios' }}
    />

    <NativeStack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={{ headerShown: Platform.OS === 'ios' }}
    />
  </NativeStack.Navigator>
);
