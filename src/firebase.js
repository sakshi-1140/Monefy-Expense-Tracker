// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAWuey52_CJj0gFWDgwiEpJJiHUjc1ncE",
  authDomain: "monefy---expense-tracker.firebaseapp.com",
  projectId: "monefy---expense-tracker",
  storageBucket: "monefy---expense-tracker.appspot.com",
  messagingSenderId: "361641172475",
  appId: "1:361641172475:web:243065373655b4b379ff5e",
  measurementId: "G-LMD9P8WR3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };