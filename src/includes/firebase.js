import firebase from "firebase/app";
import "firebase/auth";
// new database
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRkSKToiKPHRNVZbEDBPJO1uj-Gu5NgEg",
  authDomain: "music-vue-4a3ee.firebaseapp.com",
  projectId: "music-vue-4a3ee",
  storageBucket: "music-vue-4a3ee.appspot.com",
  //   messagingSenderId: "473824494902",
  appId: "1:473824494902:web:0116b46bec3364853e1f97",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// user collection
const usersCollection = db.collection("users");

export { auth, db, usersCollection };