// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJvTgJBBUk3BWEcQbyF6OJ0HuMwG3t7mk",
  authDomain: "kicks-c5016.firebaseapp.com",
  projectId: "kicks-c5016",
  storageBucket: "kicks-c5016.appspot.com",
  messagingSenderId: "1008669830278",
  appId: "1:1008669830278:web:3fd059d758981d5bd37507",
  measurementId: "G-X87DC078KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();

export const auth = getAuth(app);