// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crypto-trade-link-f8541.firebaseapp.com",
  projectId: "crypto-trade-link",
  storageBucket: "crypto-trade-link-f8541.appspot.com",
  messagingSenderId: "149650206469",
  appId: "1:149650206469:web:a382dc02dd069e19bcd16c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);





