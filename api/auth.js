import firebase from 'firebase';

export const register = (email, password, name, surname) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        firebase
          .firestore()
          .collection('users')
          .doc(res.user.uid)
          .set({ name, surname, email });

        resolve({ success: true });
      })
      .catch(err => {
        const code = err.code;

        let message;

        if (code === 'auth/email-already-in-use') {
          message = 'User with this email already exists.';
        } else if (code === 'auth/invalid-email') {
          message = 'Structure of email is incorrect.';
        }

        resolve({ message });
      });
  });
};

export const login = (email, password) => {
  return new Promise(resolve => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => resolve({ user: res.user.uid }))
      .catch(err => {
        const code = err.code;

        let message;

        if (code === 'auth/wrong-password') {
          message = 'Incorrect password.';
        } else if (code === 'auth/invalid-email') {
          message = 'Structure of email is incorrect.';
        } else if (code === 'auth/user-not-found') {
          message = 'User not found.';
        }

        resolve({ message });
      });
  });
};

export const resetPassword = email => {
  return new Promise(resolve => {
    firebase
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(res => {
        if (res.includes('password')) {
          firebase.auth().sendPasswordResetEmail(email);

          resolve({ success: true });
        } else {
          resolve('User not found.');
        }
      })
      .catch(err => {
        const code = err.code;

        if (code === 'auth/invalid-email') {
          resolve('Structure of email is incorrect.');
        }
      });
  });
};
