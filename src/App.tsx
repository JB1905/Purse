import React from 'react';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { StacksProvider } from '@mobily/stacks';
import { enableScreens } from 'react-native-screens';
import { composeWrappers } from 'react-compose-wrappers';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from './screens';

import RootModal from './components/RootModal';

import { useUpdates } from './hooks/useUpdates';
import { useAppearance } from './hooks/useAppearance';

import { firebase } from './config/firebase';

import { theme } from './constants/theme';

import { store, persistor } from './store';

import './errors' // TODO

enableScreens();

// -------------- move
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
// -------------- move

const App = () => {
  useUpdates();

  const { activeMode } = useAppearance();

  const RootProvider = composeWrappers([
    (props) => <React.StrictMode>{props.children}</React.StrictMode>,
    (props) => <Provider store={store}>{props.children}</Provider>,
    (props) => (
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    ),
    (props) => (
      <ReactReduxFirebaseProvider {...rrfProps}>
        {props.children}
      </ReactReduxFirebaseProvider>
    ),
    (props) => <SafeAreaProvider>{props.children}</SafeAreaProvider>,
    (props) => <AppearanceProvider>{props.children}</AppearanceProvider>,
    (props) => (
      <NavigationContainer theme={activeMode}>
        {props.children}
      </NavigationContainer>
    ),
    (props) => <StacksProvider spacing={4}>{props.children}</StacksProvider>,
    (props) => <ThemeProvider theme={theme} /* useDark={true} */>{props.children}</ThemeProvider>,
  ]);

  return (
    <RootProvider>
      <Layout />

      <RootModal />
    </RootProvider>
  );
};

registerRootComponent(App);
