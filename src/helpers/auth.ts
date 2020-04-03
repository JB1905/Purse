import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-key';

export const onSignIn = (uid: string) => {
  AsyncStorage.setItem(USER_KEY, `${uid}`);
};

export const onSignOut = () => {
  AsyncStorage.removeItem(USER_KEY);
};

export const isSignedIn = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
