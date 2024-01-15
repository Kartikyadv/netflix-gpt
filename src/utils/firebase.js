// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);