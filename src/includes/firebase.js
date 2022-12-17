import firebase from "firebase/app";
import "firebase/auth";
// new database
import "firebase/firestore";
// storage file firebase
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRkSKToiKPHRNVZbEDBPJO1uj-Gu5NgEg",
  authDomain: "music-vue-4a3ee.firebaseapp.com",
  projectId: "music-vue-4a3ee",
  storageBucket: "music-vue-4a3ee.appspot.com",
  // messagingSenderId: "473824494902",
  appId: "1:473824494902:web:0116b46bec3364853e1f97",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// to persistence db firebase
db.enablePersistence().catch((err) => {
  console.log(`Firebase persistence error ${err.code}`);
});

// user collection
const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
