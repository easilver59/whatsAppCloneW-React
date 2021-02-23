import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC0deuaSeH-t-eoyeJD6fuycgitYasa5o",
  authDomain: "whats-app-clone-5278a.firebaseapp.com",
  projectId: "whats-app-clone-5278a",
  storageBucket: "whats-app-clone-5278a.appspot.com",
  messagingSenderId: "641675058991",
  appId: "1:641675058991:web:10195eb3d103360a190bda",
  measurementId: "G-7DS6DHKRCS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
