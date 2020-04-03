import { firebase } from '../config/firebase';

export const createAccount = async (
  email: string,
  password: string,
  name: string,
  surname: string
) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    firebase
      .firestore()
      .collection('users')
      .doc(res.user.uid)
      .set({ name, surname, email });

    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    return { user: data.user.uid };
  } catch (err) {
    const code = err.code;

    let message: string;

    if (code === 'auth/email-already-in-use') {
      message = 'User with this email already exists.';
    } else if (code === 'auth/invalid-email') {
      message = 'Structure of email is incorrect.';
    }

    return { message };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    return { user: res.user.uid };
  } catch (err) {
    const code = err.code;

    let message: string;

    if (code === 'auth/wrong-password') {
      message = 'Incorrect password.';
    } else if (code === 'auth/invalid-email') {
      message = 'Structure of email is incorrect.';
    } else if (code === 'auth/user-not-found') {
      message = 'User not found.';
    }

    return { message };
  }
};

export const resetPassword = async (email: string) => {
  try {
    const res = await firebase.auth().fetchSignInMethodsForEmail(email);

    if (res.includes('password')) {
      return { success: true };
    } else {
      return { message: 'User not found.' };
    }
  } catch (err) {
    const code = err.code;

    let message: string;

    if (code === 'auth/invalid-email') {
      message = 'Structure of email is incorrect.';
    }

    return { message };
  }
};
