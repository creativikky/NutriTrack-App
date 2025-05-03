// Firebase config goes here

// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, getDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsSdKm43H4dyjKGHtTN6ahwH6RwVcSdYo",
  authDomain: "nutritrack-12b26.firebaseapp.com",
  projectId: "nutritrack-12b26",
  storageBucket: "nutritrack-12b26.firebasestorage.app",
  messagingSenderId: "1034235028376",
  appId: "1:1034235028376:web:ce52c8ca6d1e6a993141ed",
  measurementId: "G-G3GHJFWY4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, collection, addDoc, setDoc, getDoc, getDocs, updateDoc, doc, deleteDoc, query, where };
