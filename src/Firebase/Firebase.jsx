import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN7sebvZJ7nol7VNm59knK0nKdzZ6AYOU",
  authDomain: "personal-portfolio-a838d.firebaseapp.com",
  projectId: "personal-portfolio-a838d",
  storageBucket: "personal-portfolio-a838d.firebasestorage.app",
  messagingSenderId: "205864524571",
  appId: "1:205864524571:web:d60b5ffa1802e874c891be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
