import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useTheme,
  TypedNavigator,
  StackNavigationState,
} from '@react-navigation/native';

import Icon from '../../components/Icon';
import HeaderButton from '../../components/HeaderButton';

import Categories from './Categories'; // lazy?
import Category from './Category'; // lazy?
import CategoryManager from './CategoryManager'; // lazy?

import Finances from './Finances'; // lazy?
import FinanceManager from './FinanceManager'; // lazy?

import Analytics from './Analytics'; // lazy?

import Search from './Search'; // lazy?

import Settings from './Settings'; // lazy?

import type { LoggedInParamList, TabsParamList } from '../../types/Navigation';

import { Route } from '../../enums/Route';

const NativeStack = createNativeStackNavigator<LoggedInParamList>();
const Tab = createBottomTabNavigator<TabsParamList>();

const shareRoutesBetweenTabs = (
  Stack: TypedNavigator<any, StackNavigationState, any, any, any>
) => (
  <>
    <Stack.Screen
      name={Route.FINANCES}
      component={Finances}
      options={({ navigation }) => ({
        ...headerCustomOptions(navigation),
        headerRight: () => (
          <HeaderButton
            iconName="add-circle"
            onPress={() => navigation.navigate(Route.FINANCE_MANAGER)}
          />
        ),
      })}
    />

    <Stack.Screen
      name={Route.CATEGORIES}
      component={Categories}
      options={({ navigation }) => ({
        headerLargeTitle: true,
        ...headerCustomOptions(navigation),
        headerRight: () => (
          <HeaderButton
            iconName="add-circle"
            onPress={() => navigation.navigate(Route.CATEGORY_MANAGER)}
          />
        ),
      })}
    />

    <Stack.Screen
      name={Route.CATEGORY}
      component={Category}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </>
);

const headerCustomOptions = (navigation: any) => ({
  headerLeft: () => (
    <HeaderButton
      iconName="settings"
      onPress={() => navigation.navigate(Route.SETTINGS)}
    />
  ),
});

const FinancesScreen = () => (
  <NativeStack.Navigator>
    {shareRoutesBetweenTabs(NativeStack)}
  </NativeStack.Navigator>
);

const AnalyticsScreen = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name={Route.ANALYTICS}
      component={Analytics}
      options={({ navigation }) => ({
        headerLargeTitle: true,
        ...headerCustomOptions(navigation),
      })}
    />
  </NativeStack.Navigator>
);

const CategoriesScreen = () => (
  <NativeStack.Navigator initialRouteName={Route.CATEGORIES}>
    {shareRoutesBetweenTabs(NativeStack)}
  </NativeStack.Navigator>
);

const SearchScreen = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name={Route.SEARCH}
      component={Search}
      options={({ navigation }) => ({
        headerLargeTitle: true,
        ...headerCustomOptions(navigation),
      })}
    />

    {shareRoutesBetweenTabs(NativeStack)}
  </NativeStack.Navigator>
);

const CategoryManagerStack = ({ route }) => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name={Route.CATEGORY_MANAGER}
      component={CategoryManager}
      initialParams={route.params}
    />
  </NativeStack.Navigator>
);

const FinanceManagerStack = ({ route }) => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name={Route.FINANCE_MANAGER}
      component={FinanceManager}
      initialParams={route.params}
    />
  </NativeStack.Navigator>
);

const MainScreen = () => {
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
        labelStyle: {
          marginBottom: 2 // TODO
        }
      }}
    >
      <Tab.Screen name={Route.FINANCES} component={FinancesScreen} />
      <Tab.Screen name={Route.ANALYTICS} component={AnalyticsScreen} />
      <Tab.Screen name={Route.CATEGORIES} component={CategoriesScreen} />
      <Tab.Screen name={Route.SEARCH} component={SearchScreen} />
    </Tab.Navigator>
  );
};

export const LoggedIn = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerShown: false,
      stackPresentation: Platform.OS === 'ios' ? 'formSheet' : 'push',
      gestureEnabled: false,
    }}
  >
    <NativeStack.Screen name={Route.MAIN} component={MainScreen} />

    <NativeStack.Screen
      name={Route.CATEGORY_MANAGER}
      component={CategoryManagerStack}
    />

    <NativeStack.Screen
      name={Route.FINANCE_MANAGER}
      component={FinanceManagerStack}
    />

    <NativeStack.Screen name={Route.SETTINGS} component={Settings} />
  </NativeStack.Navigator>
);
