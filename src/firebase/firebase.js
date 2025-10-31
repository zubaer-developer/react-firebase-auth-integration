// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrKliFpn_weSNgvyTfjBFOgIzvepan-EM",
  authDomain: "react-firebase-auth-inte-6ef7a.firebaseapp.com",
  projectId: "react-firebase-auth-inte-6ef7a",
  storageBucket: "react-firebase-auth-inte-6ef7a.firebasestorage.app",
  messagingSenderId: "689197274721",
  appId: "1:689197274721:web:c4af3c4feadd3f8d083c20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
