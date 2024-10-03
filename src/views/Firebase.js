// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbqju26o_myA4SXD3SPwBvulmE8Clwwds",
  authDomain: "roboboat-utd.firebaseapp.com",
  projectId: "roboboat-utd",
  storageBucket: "roboboat-utd.appspot.com",
  messagingSenderId: "63800822193",
  appId: "1:63800822193:web:5e5ff4a0c4ccbe3e1a9590",
  measurementId: "G-65BRV0EPEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export {db, storage,auth}