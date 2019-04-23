import React, { useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { FirestoreProvider } from 'react-firestore';

import { isSignedIn } from './auth';
import { firebase } from './api';

import { RootNavigator } from './screens';

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [checkedSignIn, setCheckedSignIn] = useState(false);

  useEffect(() => {
    isSignedIn()
      .then(res => {
        setSignedIn(res);
        setCheckedSignIn(true);
      })
      .catch(err => alert(`An error occurred: ${err}`));
  }, []);

  if (!checkedSignIn) return null;

  const Layout = createAppContainer(RootNavigator(signedIn));

  return (
    <FirestoreProvider firebase={firebase}>
      <Layout />
    </FirestoreProvider>
  );
}
