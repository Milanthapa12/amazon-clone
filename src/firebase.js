import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwXpebAc1uxh9z7QNxKyEuBghXOWmSYOA",
  authDomain: "clone-d7faf.firebaseapp.com",
  projectId: "clone-d7faf",
  storageBucket: "clone-d7faf.appspot.com",
  messagingSenderId: "618901199323",
  appId: "1:618901199323:web:d0ea21e9c1137cbae22ffe",
  measurementId: "G-FEMWQHDQGP",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
