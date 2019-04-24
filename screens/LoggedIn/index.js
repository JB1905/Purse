import React from 'react';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import CategoryManager from './CategoryManager';
import Categories from './Categories';
import Category from './Category';

import FinanceManager from './FinanceManager';
import Calendar from './Calendar';
import Analytics from './Analytics';

import Settings from './Settings';
import Account from './Account';

const finances = createStackNavigator({
});

const analytics = createStackNavigator({
});

const categories = createStackNavigator({
});

export const Main = createBottomTabNavigator(
  {
    Finances: finances,
    Analytics: analytics,
    Categories: categories
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;

        if (routeName === 'Finances') iconName = 'ios-wallet';
        else if (routeName === 'Analytics') iconName = 'ios-stats';
        else if (routeName === 'Categories') iconName = 'ios-list-box';

        return <Ionicons name={iconName} size={26} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#5ac59a',
      inactiveTintColor: 'gray'
    }
  }
);

const categoryManager = createStackNavigator({
  CategoryManager: {
    screen: CategoryManager,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.getParam('item')?.id ? 'Edit' : 'Add'} Category`,
      gesturesEnabled: false,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Main')}
          color="#5ac59a"
          title="Cancel"
        />
      )
    })
  }
});

const financeManager = createStackNavigator({
  FinanceManager: {
    screen: FinanceManager,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.getParam('item')?.id ? 'Edit' : 'Add'} Finance`,
      gesturesEnabled: false,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Main')}
          color="#5ac59a"
          title="Cancel"
        />
      )
    })
  }
});

const settings = createStackNavigator({
});

export const SignedIn = createStackNavigator(
  {
    Main,
    CategoryManager: categoryManager,
    FinanceManager: financeManager,
    Settings: settings
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);
