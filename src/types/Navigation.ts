import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteProp } from '@react-navigation/native';

export type LoggedOutParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
};

export type LoggedInParamList = {
  Finances: {
    query: string;
  };

  Categories: {
    query: string;
  };

  Category: {
    id: string;
    name: string;
  };

  Analytics: undefined;

  Search: undefined;
} & MainParamList;

export type SettingsParamList = {
  Profile: undefined;
  User: undefined;
  UsersConnect: undefined;
  BanksConnect: undefined;
  PaymentMethods: undefined;
  LocalAuthentication: undefined;
  AppIcon: undefined;
  Appearance: undefined;
  BottomNavItems: undefined;
};

export type MainParamList = {
  Main: undefined;

  CategoryManager: {
    id?: string;
    name?: string;
    color?: string;
    icon?: string;
  };

  FinanceManager: {
    id?: string;
    type?: string;
    value?: string;
    title?: string;
    category?: string;
    date?: number;
    coords?: object;
  };

  Settings: undefined;
};

export type AppParamList = {
  Loading: undefined;
  LoggedOut: LoggedOutParamList;
  LoggedIn: LoggedInParamList;
};

export type TabsParamList = {
  Finances: undefined;
  Analytics: undefined;
  Categories: undefined;
  Search: undefined;
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
