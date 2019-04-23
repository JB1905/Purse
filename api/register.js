import firebase from 'firebase';

export default function register(email, password, name, surname) {
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
          message = 'User with this email already exists';
        } else if (code === 'auth/invalid-email') {
          message = 'Structure of email is incorrect.';
        }

        resolve({ message });
      });
  });
}
