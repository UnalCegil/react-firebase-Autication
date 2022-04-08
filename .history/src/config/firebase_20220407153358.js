import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  
  getFirestore,
  
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAIwPj3b5JD9E5rXOWV5DbhS-48pxRWnzA",
  authDomain: "products-5f019.firebaseapp.com",
  projectId: "products-5f019",
  storageBucket: "-..",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


