import firebase from 'firebase';

export default function resetPassword(email) {
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
}
