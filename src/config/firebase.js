
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-TNAG9kupyNQZqnMCQyjJQdRTkCHmFjI",
  authDomain: "m-share-ca42a.firebaseapp.com",
  projectId: "m-share-ca42a",
  storageBucket: "m-share-ca42a.appspot.com",
  messagingSenderId: "759579336253",
  appId: "1:759579336253:web:8f78f14f63827eebdc9454",
  measurementId: "G-P4QVL0XC60"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };