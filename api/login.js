import firebase from 'firebase';

export default function login(email, password) {
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
          message = 'Incorrect email.';
        } else if (code === 'auth/user-not-found') {
          message = 'User not found.';
        }

        resolve({ message });
      });
  });
}
