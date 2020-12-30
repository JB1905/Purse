import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import {
  FinancesScreen,
  AnalyticsScreen,
  CategoriesScreen,
  SearchScreen,
} from './Stack';

import Icon from '../../components/Icon';

import type { TabsParamList } from '../../types/Navigation';

import { Route } from '../../enums/Route';

const Tab = createBottomTabNavigator<TabsParamList>();

export const MainScreen = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string;

          if (route.name === Route.FINANCES) {
            iconName = 'wallet';
          } else if (route.name === Route.ANALYTICS) {
            iconName = 'stats';
          } else if (route.name === Route.CATEGORIES) {
            iconName = 'list-box';
          } else if (route.name === Route.SEARCH) {
            iconName = 'search';
          }

          return <Icon name={iconName} color={color} size={26} />;
        },
      })}
      tabBarOptions={{
        showLabel: Platform.OS === 'ios',
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={Route.FINANCES} component={FinancesScreen} />
      <Tab.Screen name={Route.ANALYTICS} component={AnalyticsScreen} />
      <Tab.Screen name={Route.CATEGORIES} component={CategoriesScreen} />
      <Tab.Screen name={Route.SEARCH} component={SearchScreen} />
    </Tab.Navigator>
  );
};
