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

import Categories from './Categories';
import Category from './Category';
import CategoryManager from './CategoryManager';

import Finances from './Finances';
import FinanceManager from './FinanceManager';

import Analytics from './Analytics';

import Search from './Search';

import Settings from './Settings';

import type { LoggedInParamList, TabsParamList } from '../../types/Navigation';

const NativeStack = createNativeStackNavigator<LoggedInParamList>();
const Tab = createBottomTabNavigator<TabsParamList>();

const shareRoutesBetweenTabs = (
  Stack: TypedNavigator<any, StackNavigationState, any, any, any>
) => (
  <>
    <Stack.Screen
      name="Finances"
      component={Finances}
      options={({ navigation }) => ({
        ...headerCustomOptions(navigation),
        headerRight: () => (
          <HeaderButton
            iconName="add-circle"
            onPress={() => navigation.navigate('FinanceManager')}
          />
        ),
      })}
    />

    <Stack.Screen
      name="Categories"
      component={Categories}
      options={({ navigation }) => ({
        headerLargeTitle: true,
        ...headerCustomOptions(navigation),
        headerRight: () => (
          <HeaderButton
            iconName="add-circle"
            onPress={() => navigation.navigate('CategoryManager')}
          />
        ),
      })}
    />

    <Stack.Screen
      name="Category"
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
      onPress={() => navigation.navigate('Settings')}
    />
  ),
});

const FinancesScreen: React.FC = () => (
  <NativeStack.Navigator>
    {shareRoutesBetweenTabs(NativeStack)}
  </NativeStack.Navigator>
);

const AnalyticsScreen: React.FC = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="Analytics"
      component={Analytics}
      options={({ navigation }) => ({
        headerLargeTitle: true,
        ...headerCustomOptions(navigation),
      })}
    />
  </NativeStack.Navigator>
);

const CategoriesScreen: React.FC = () => (
  <NativeStack.Navigator initialRouteName="Categories">
    {shareRoutesBetweenTabs(NativeStack)}
  </NativeStack.Navigator>
);

const SearchScreen: React.FC = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="Search"
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
      name="CategoryManager"
      component={CategoryManager}
      initialParams={route.params}
    />
  </NativeStack.Navigator>
);

const FinanceManagerStack = ({ route }) => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="FinanceManager"
      component={FinanceManager}
      initialParams={route.params}
    />
  </NativeStack.Navigator>
);

const MainScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string;

          if (route.name === 'Finances') {
            iconName = 'wallet';
          } else if (route.name === 'Analytics') {
            iconName = 'stats';
          } else if (route.name === 'Categories') {
            iconName = 'list-box';
          } else if (route.name === 'Search') {
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
      <Tab.Screen name="Finances" component={FinancesScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export const LoggedIn: React.FC = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerShown: false,
      stackPresentation: Platform.OS === 'ios' ? 'formSheet' : 'push',
      gestureEnabled: false,
    }}
  >
    <NativeStack.Screen name="Main" component={MainScreen} />
    <NativeStack.Screen
      name="CategoryManager"
      component={CategoryManagerStack}
    />
    <NativeStack.Screen name="FinanceManager" component={FinanceManagerStack} />
    <NativeStack.Screen name="Settings" component={Settings} />
  </NativeStack.Navigator>
);
