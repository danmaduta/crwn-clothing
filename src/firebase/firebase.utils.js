import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEF8oWh9FgVXJ-jpdsK2V8W1mEsVTm6Dk",
    authDomain: "crwn-db-aa410.firebaseapp.com",
    projectId: "crwn-db-aa410",
    storageBucket: "crwn-db-aa410.appspot.com",
    messagingSenderId: "830049407837",
    appId: "1:830049407837:web:c5bda5eaac9188a80b4eb4",
    measurementId: "G-XXL8VRE9W4"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;