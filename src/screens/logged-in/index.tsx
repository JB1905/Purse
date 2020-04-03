import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

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

import {
  MainParamList,
  LoggedInParamList,
  TabsParamList,
} from '../../types/Navigation';

const Stack = createStackNavigator<MainParamList>();
const NativeStack = createNativeStackNavigator<LoggedInParamList>();
const Tab = createBottomTabNavigator<TabsParamList>();

const modalOptions = {
  headerStatusBarHeight: 0,
  headerStyle: {
    height: 56,
  },
};

const FinancesScreen: React.FC = () => {
  // const { colors } = useTheme();

  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name="Finances"
        component={Finances}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButton
              iconName="circle"
              onPress={() => navigation.navigate('FinanceManager')}
            />
          ),
        })}
      />
    </NativeStack.Navigator>
  );
};

const AnalyticsScreen: React.FC = () => {
  // const { colors } = useTheme();

  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name="Analytics"
        component={Analytics}
        options={({ navigation }) => ({
          headerLargeTitle: true,
          headerRight: () => (
            <HeaderButton
              iconName="settings"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
        })}
      />
    </NativeStack.Navigator>
  );
};

const CategoriesScreen: React.FC = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="Categories"
      component={Categories}
      options={({ navigation }) => ({
        headerLargeTitle: true,
        headerRight: () => (
          <HeaderButton
            iconName="add"
            onPress={() => navigation.navigate('CategoryManager')}
          />
        ),
      })}
    />

    <NativeStack.Screen name="Category" component={Category} />
  </NativeStack.Navigator>
);

const SearchScreen: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

const CategoryManagerStack = ({ route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategoryManager"
      component={CategoryManager}
      initialParams={route.params}
      options={modalOptions}
    />
  </Stack.Navigator>
);

const FinanceManagerStack = ({ route }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="FinanceManager"
      component={FinanceManager}
      initialParams={route.params}
      options={modalOptions}
    />
  </Stack.Navigator>
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
        keyboardHidesTabBar: true,
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
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="CategoryManager" component={CategoryManagerStack} />
    <Stack.Screen name="FinanceManager" component={FinanceManagerStack} />
    <Stack.Screen name="Settings" component={Settings} />
  </NativeStack.Navigator>
);
