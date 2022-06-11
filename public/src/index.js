// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// auth

import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAL3IwdWW7oSStxqwRpsQSqY4uHMO0v2kk",
    authDomain: "chatsmiggle.firebaseapp.com",
    databaseURL: "https://chatsmiggle-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatsmiggle",
    storageBucket: "chatsmiggle.appspot.com",
    messagingSenderId: "107877885059",
    appId: "1:107877885059:web:5681065701bae00f67e7b6",
    measurementId: "G-THQEK78266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });