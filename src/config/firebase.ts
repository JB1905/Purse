import firebase from 'firebase';
import 'firebase/firestore';
import Constants from 'expo-constants';

const configFirebase = Constants.manifest.extra.firebase;

firebase.initializeApp(configFirebase);

const db = firebase.firestore();

export { firebase, db };
