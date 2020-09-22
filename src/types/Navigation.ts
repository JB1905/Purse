import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Route } from '../enums/Route';

export type LoggedOutParamList = {
  [Route.SIGN_IN]: undefined;
  [Route.SIGN_UP]: undefined;
  [Route.RESET_PASSWORD]: undefined;
};

export type LoggedInParamList = {
  [Route.FINANCES]: {
    query: string;
  };

  [Route.CATEGORIES]: {
    query: string;
  };

  [Route.CATEGORY]: {
    id: string;
    name: string;
  };

  [Route.ANALYTICS]: undefined;

  [Route.SEARCH]: undefined;
} & MainParamList &
  SettingsParamList;

export type SettingsParamList = {
  [Route.PROFILE]: undefined;
  [Route.USER]: undefined;
  [Route.USERS_CONNECT]: undefined;
  [Route.BANKS_CONNECT]: undefined;
  [Route.PAYMENT_METHODS]: undefined;
  [Route.LOCAL_AUTHENTICATION]: undefined;
  [Route.APP_ICON]: undefined;
  [Route.APPEARANCE]: undefined;
  [Route.BOTTOM_NAV_ITEMS]: undefined;
};

export type MainParamList = {
  [Route.MAIN]: undefined;

  [Route.CATEGORY_MANAGER]: {
    id?: string;
    name?: string;
    color?: string;
    icon?: string;
  };

  [Route.FINANCE_MANAGER]: {
    id?: string;
    type?: string;
    value?: string;
    title?: string;
    category?: string;
    date?: number;
    coords?: object;
  };

  [Route.SETTINGS]: undefined;
};

export type AppParamList = {
  [Route.LOGGED_OUT]: LoggedOutParamList;
  [Route.LOGGED_IN]: LoggedInParamList;
};

export type TabsParamList = {
  [Route.FINANCES]: undefined;
  [Route.ANALYTICS]: undefined;
  [Route.CATEGORIES]: undefined;
  [Route.SEARCH]: undefined;
};

export type MainProps<T extends keyof MainParamList> = {
  navigation: NativeStackNavigationProp<MainParamList, T>;
  route: RouteProp<MainParamList, T>;
};

export type LoggedOutProps<T extends keyof LoggedOutParamList> = {
  navigation: NativeStackNavigationProp<LoggedOutParamList, T>;
  route: RouteProp<LoggedOutParamList, T>;
};

export type LoggedInProps<T extends keyof LoggedInParamList> = {
  navigation: NativeStackNavigationProp<LoggedInParamList, T>;
  route: RouteProp<LoggedInParamList, T>;
};
