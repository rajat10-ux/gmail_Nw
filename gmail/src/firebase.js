import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbmwei0pxql0zBakawWnOsoaZV-0lj0cM",
  authDomain: "fir-2086b.firebaseapp.com",
  projectId: "fir-2086b",
  storageBucket: "fir-2086b.appspot.com",
  messagingSenderId: "350524608063",
  appId: "1:350524608063:web:f8a1b8a25b1f0e293af28a",
  measurementId: "G-V74V66YKZ2"
};
// Initialize Firebase


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();