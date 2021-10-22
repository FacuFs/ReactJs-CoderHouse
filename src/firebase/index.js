import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDSDmy8443ypJER6zOUmJ49hb0M5co5tSU",

  authDomain: "reactjs-flores.firebaseapp.com",

  projectId: "reactjs-flores",

  storageBucket: "reactjs-flores.appspot.com",

  messagingSenderId: "733169585641",

  appId: "1:733169585641:web:6d7213c2dc37cf92e3cf78",

  measurementId: "G-BZ2M4M4CS6"

});

export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}