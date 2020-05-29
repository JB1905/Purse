import React from 'react';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import Main from './Main';

import store from './store';

import { firebase } from './config/firebase';

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

const App: React.FC = () => (
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Main />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);

registerRootComponent(App);
