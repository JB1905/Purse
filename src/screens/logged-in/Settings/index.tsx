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

import type { SettingsParamList } from '../../../types/Navigation';

const NativeStack = createNativeStackNavigator<SettingsParamList>();

const Settings: React.FC = () => (
  <NativeStack.Navigator
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
    <NativeStack.Screen
      name="Profile"
      component={Profile}
      options={{ title: 'Profile' }}
    />

    <NativeStack.Screen name="User" component={User} />

    <NativeStack.Screen
      name="BanksConnect"
      component={BanksConnect}
      options={{ title: 'Bank Accounts' }}
    />

    <NativeStack.Screen
      name="UsersConnect"
      component={UsersConnect}
      options={{ title: 'Connected Users' }}
    />

    <NativeStack.Screen
      name="PaymentMethods"
      component={PaymentMethods}
      options={{ title: 'Payment Methods' }}
    />

    <NativeStack.Screen name="Appearance" component={Appearance} />

    <NativeStack.Screen
      name="AppIcon"
      component={AppIcon}
      options={{ title: 'App Icon' }}
    />

    <NativeStack.Screen
      name="BottomNavItems"
      component={BottomNavItems}
      options={{ title: 'Bottom Tabs' }}
    />

    <NativeStack.Screen
      name="LocalAuthentication"
      component={LocalAuthentication}
      options={{ title: 'Local Authentication' }}
    />
  </NativeStack.Navigator>
);

export default Settings;
