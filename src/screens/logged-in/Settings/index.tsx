import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Profile from './Profile';
import User from './User';
import Appearance from './Appearance';
import AppIcon from './AppIcon';
import LocalAuthentication from './LocalAuthentication';
import BanksConnect from './BanksConnect';
import UsersConnect from './UsersConnect';
import PaymentMethods from './PaymentMethods';
import BottomNavItems from './BottomNavItems';
import HeaderButton from '../../../components/HeaderButton';

import { SettingsParamList } from '../../../types/Navigation';

const Stack = createNativeStackNavigator<SettingsParamList>();

const Settings: React.FC<any> = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () =>
        Platform.OS === 'ios' && (
          <HeaderButton
            title="Done"
            onPress={() => navigation.navigate('Main')}
          />
        ),
    })}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ title: 'Profile' }}
    />

    <Stack.Screen name="User" component={User} />

    <Stack.Screen
      name="BanksConnect"
      component={BanksConnect}
      options={{ title: 'Bank Accounts' }}
    />

    <Stack.Screen
      name="UsersConnect"
      component={UsersConnect}
      options={{ title: 'Connected Users' }}
    />

    <Stack.Screen
      name="PaymentMethods"
      component={PaymentMethods}
      options={{ title: 'Payment Methods' }}
    />

    <Stack.Screen name="Appearance" component={Appearance} />

    <Stack.Screen
      name="AppIcon"
      component={AppIcon}
      options={{ title: 'App Icon' }}
    />

    <Stack.Screen
      name="BottomNavItems"
      component={BottomNavItems}
      options={{ title: 'Bottom Tabs' }}
    />

    <Stack.Screen
      name="LocalAuthentication"
      component={LocalAuthentication}
      options={{ title: 'Local Authentication' }}
    />
  </Stack.Navigator>
);

export default Settings;
