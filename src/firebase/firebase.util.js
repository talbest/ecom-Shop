import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDxpt8e0XxArLjW0Es2l5rMYvTWqDsVubY",
    authDomain: "econ-shop-4ad1a.firebaseapp.com",
    projectId: "econ-shop-4ad1a",
    storageBucket: "econ-shop-4ad1a.appspot.com",
    messagingSenderId: "509458832836",
    appId: "1:509458832836:web:e878c28e0ab62c69c99891",
    measurementId: "G-TTPSYSNJXB"
};

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
