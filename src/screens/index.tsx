import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { SplashScreen } from 'expo';

import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';

import type { AppParamList } from '../types/Navigation';

const NativeStack = createNativeStackNavigator<AppParamList>();

const Layout: React.FC = () => {
  const auth = useSelector((state: any) => state.firebase.auth);

  useEffect(() => {
    if (isLoaded(auth)) SplashScreen.hide();
  }, [auth]);

  return (
    <NativeStack.Navigator
      screenOptions={{ headerShown: false, stackAnimation: 'none' }}
    >
      {isEmpty(auth) ? (
        <NativeStack.Screen name="LoggedOut" component={LoggedOut} />
      ) : (
        <NativeStack.Screen name="LoggedIn" component={LoggedIn} />
      )}
    </NativeStack.Navigator>
  );
};

export default Layout;
