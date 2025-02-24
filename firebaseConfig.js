import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQQvjGylXiWW68ex8lC8UBCx54vD2fWfg",
  authDomain: "buddji.firebaseapp.com",
  projectId: "buddji",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "421175662259",
  appId: "1:421175662259:android:d115b55e287e19b4f802c6",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

console.log("Firebase Initialized:", app.name);
console.log("Firestore Initialized:", db);

// const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword, onAuthStateChanged };
