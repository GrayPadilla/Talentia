// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvqHnoorscWSTt-SdHMEJ9S12YU6oKpA",
  authDomain: "talenta-c3f17.firebaseapp.com",
  projectId: "talenta-c3f17",
  storageBucket: "talenta-c3f17.firebasestorage.app",
  messagingSenderId: "1047075241355",
  appId: "1:1047075241355:web:56f5f9c9f65f199e07838e",
  measurementId: "G-VDLGTZ3E5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };