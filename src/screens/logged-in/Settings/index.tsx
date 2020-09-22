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

import { Route } from '../../../enums/Route';

const NativeStack = createNativeStackNavigator<SettingsParamList>();

const Settings: React.FC = () => (
  <NativeStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () =>
        Platform.OS === 'ios' && (
          <HeaderButton
            title="Done"
            onPress={() => navigation.navigate(Route.MAIN)}
          />
        ),
    })}
  >
    <NativeStack.Screen
      name={Route.PROFILE}
      component={Profile}
      options={{ title: 'Profile' }}
    />

    <NativeStack.Screen name={Route.USER} component={User} />

    <NativeStack.Screen
      name={Route.BANKS_CONNECT}
      component={BanksConnect}
      options={{ title: 'Bank Accounts' }}
    />

    <NativeStack.Screen
      name={Route.USERS_CONNECT}
      component={UsersConnect}
      options={{ title: 'Connected Users' }}
    />

    <NativeStack.Screen
      name={Route.PAYMENT_METHODS}
      component={PaymentMethods}
      options={{ title: 'Payment Methods' }}
    />

    <NativeStack.Screen name={Route.APPEARANCE} component={Appearance} />

    <NativeStack.Screen
      name={Route.APP_ICON}
      component={AppIcon}
      options={{ title: 'App Icon' }}
    />

    <NativeStack.Screen
      name={Route.BOTTOM_NAV_ITEMS}
      component={BottomNavItems}
      options={{ title: 'Bottom Tabs' }}
    />

    <NativeStack.Screen
      name={Route.LOCAL_AUTHENTICATION}
      component={LocalAuthentication}
      options={{ title: 'Local Authentication' }}
    />
  </NativeStack.Navigator>
);

export default Settings;
