import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAboKSOeeHTIXSOdx4b8ro_tvrsez_Al5M",
  authDomain: "house-marketplace-app-4810e.firebaseapp.com",
  projectId: "house-marketplace-app-4810e",
  storageBucket: "house-marketplace-app-4810e.appspot.com",
  messagingSenderId: "418755340238",
  appId: "1:418755340238:web:64e1d2ed10a7d3577ead9f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
