import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAXQksSDnjxEDTfyEbzuJpI8KRjrxN4GA",
  authDomain: "house-marketplace-app-ce532.firebaseapp.com",
  projectId: "house-marketplace-app-ce532",
  storageBucket: "house-marketplace-app-ce532.appspot.com",
  messagingSenderId: "702753598624",
  appId: "1:702753598624:web:69506073a5e99701b8adc5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
