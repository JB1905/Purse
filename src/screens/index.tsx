import React, { useEffect, useContext } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { SplashScreen } from 'expo';

import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';

import { AuthContext } from '../providers/AuthProvider';

import { AppParamList } from '../types/Navigation';

const Stack = createNativeStackNavigator<AppParamList>();

const Layout: React.FC = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading) SplashScreen.hide();
  }, [isLoading]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, stackAnimation: 'none' }}
    >
      {isAuth ? (
        <Stack.Screen name="LoggedIn" component={LoggedIn} />
      ) : (
        <Stack.Screen name="LoggedOut" component={LoggedOut} />
      )}
    </Stack.Navigator>
  );
};

export default Layout;
