// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnUbAaEN2OEkhxvkFeVdkgPkPLcU4EHlc",
  authDomain: "techproducts-bfee5.firebaseapp.com",
  projectId: "techproducts-bfee5",
  storageBucket: "techproducts-bfee5.appspot.com",
  messagingSenderId: "804487757553",
  appId: "1:804487757553:web:818bfcca5208baa4257350",
  measurementId: "G-3N48P566FM"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);