import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-key';

export const onSignIn = uid => AsyncStorage.setItem(USER_KEY, `${uid}`);
export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => resolve(res !== null))
      .catch(err => reject(err));
  });
};
