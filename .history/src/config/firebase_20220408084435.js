import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  
  getFirestore,
  
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2Ysqr0w5MzH4n4b2yLnlZzCuJYrFcR-M",
  authDomain: "products-b094f.firebaseapp.com",
  projectId: "products-b094f",
  storageBucket: "products-b094f.appspot.com",
  messagingSenderId: "945544342745",
  appId: "1:945544342745:web:ee6008239918c48b6a22c8",
  measurementId: "G-FMPTNEJYBT"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


