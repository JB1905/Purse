import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AsyncStorage } from 'react-native';

import rootReducer, { RootState } from './reducers';

const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const store = createStore(
  persistReducer<RootState>(persistConfig, rootReducer),
  composeWithDevTools()
);

persistStore(store);

export default store;
