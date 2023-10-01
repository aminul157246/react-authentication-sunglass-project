// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaO7_ney-Bazon_BWXV1VTHXf5gmUygHE",
  authDomain: "react-cs-sunglass-project-auth.firebaseapp.com",
  projectId: "react-cs-sunglass-project-auth",
  storageBucket: "react-cs-sunglass-project-auth.appspot.com",
  messagingSenderId: "572714179867",
  appId: "1:572714179867:web:be924f6160182df00f47be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;