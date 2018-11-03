import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Home';
import Charts from './Charts';
import Categories from './Categories';
import Add from './Add';
import Settings from './Settings';

export const SignedIn = createBottomTabNavigator(
  { Home, Charts, Categories, Add, Settings },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Today') {
          iconName = 'ios-home';
        } else if (routeName === 'Calendar') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Categories') {
          iconName = 'ios-list-box';
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#56ad97',
      inactiveTintColor: 'gray'
    }
  }
);
