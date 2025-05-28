// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-51_q-cUjmrmqEk_oBx_M2oTdBE1NEYU",
  authDomain: "graceland-882aa.firebaseapp.com",
  projectId: "graceland-882aa",
  storageBucket: "graceland-882aa.firebasestorage.app",
  messagingSenderId: "783069354081",
  appId: "1:783069354081:web:4ed7c2dd1a91a83e4f3220",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
