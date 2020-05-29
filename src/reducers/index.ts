import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { themeReducer } from './themeReducer';
import { bottomTabsReducer } from './bottomTabsReducer';
import { localAuthReducer } from './localAuthReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  theme: themeReducer,
  bottomTabs: bottomTabsReducer,
  localAuth: localAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
