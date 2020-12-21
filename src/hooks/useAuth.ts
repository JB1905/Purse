import { useFirebase } from 'react-redux-firebase';

import { signInWithFacebookAsync } from '../config/facebookSignIn';
import { signInWithGoogleAsync } from '../config/googleSignIn';

export const useAuth = () => {
  const firebase = useFirebase();

  const facebookSignIn = async () => {
    const token = await signInWithFacebookAsync();

    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    await firebase.login({ credential });
  };

  const googleSignIn = async () => {
    const credential = await signInWithGoogleAsync();

    firebase.login({
      credential: firebase.auth.GoogleAuthProvider.credential(null, credential),
    });

    console.log(credential);
  };

  const createAccount = async ({ email, password, name, surname }) => {
    return await firebase.createUser(
      { email, password },
      { name, surname, email }
    );
  };

  const login = async ({ email, password }) => {
    return await firebase.login({ email, password });
  };

  const logout = async () => {
    await firebase.logout();
  };

  const resetPassword = async (email: string) => {
    return await firebase.resetPassword(email);
  };

  return {
    googleSignIn,
    facebookSignIn,
    createAccount,
    login,
    logout,
    resetPassword,
  };
};
