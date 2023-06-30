const firebase = require("firebase/app");
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyA4jZjttuZeaZg0ErzqKASU_mGCd1EA064",
    authDomain: "shortlist-3083d.firebaseapp.com",
    projectId: "shortlist-3083d",
    storageBucket: "shortlist-3083d.appspot.com",
    messagingSenderId: "59830618977",
    appId: "1:59830618977:web:389c2eb45cd6244d1b1320",
    measurementId: "G-VLHXKRVN5J"
};
const app = initializeApp(firebaseConfig);
// const db = ;
// firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

// const User = db.collection("Users");
module.exports = db;