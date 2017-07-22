import firebase from 'firebase';
import firebaseConfig from './Private/firebase.config';

export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.database();
export const auth = fb.auth();


