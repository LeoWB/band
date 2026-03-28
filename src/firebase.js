// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBuROodV0oYrblNkgG-gjDiDLUITYvPXTg",

  authDomain: "band-ef75f.firebaseapp.com",

  projectId: "band-ef75f",

  storageBucket: "band-ef75f.firebasestorage.app",

  messagingSenderId: "427677076230",

  appId: "1:427677076230:web:421d014847134ab1d22c87",

  measurementId: "G-63SMCFB4WB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);
