import { AsyncStorage } from 'react-native';

import { USER_KEY } from '../auth';

export const getUser = async () => await AsyncStorage.getItem(USER_KEY);
