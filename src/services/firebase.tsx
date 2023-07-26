// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4kKXqF4BA7d14wMqyTdD1XTUye9mnlMU",
    authDomain: "where-are-they-c60c3.firebaseapp.com",
    projectId: "where-are-they-c60c3",
    storageBucket: "where-are-they-c60c3.appspot.com",
    messagingSenderId: "602809589992",
    appId: "1:602809589992:web:4b98aa6d2b39df3a04e95d",
    measurementId: "G-CFE8L538BQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };