import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeok5Fze4uaBPn7mOv-efiROVFkKlkiQw",
  authDomain: "netflixgpt-906dc.firebaseapp.com",
  projectId: "netflixgpt-906dc",
  storageBucket: "netflixgpt-906dc.appspot.com",
  messagingSenderId: "490561514429",
  appId: "1:490561514429:web:7c8084bd5e7293bd33c0d4",
  measurementId: "G-RBNKBZSJ21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();