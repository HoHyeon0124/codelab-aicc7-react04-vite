// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBd6sOTbT_QBZ9w1NfooItBVe7RlPBwBmM",
  authDomain: "sdnsp0124-store.firebaseapp.com",
  projectId: "sdnsp0124-store",
  storageBucket: "sdnsp0124-store.firebasestorage.app",
  messagingSenderId: "851366873859",
  appId: "1:851366873859:web:989fa7fc9a6931eebdf736",
  measurementId: "G-QG913PJMBC",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export { signInWithPopup, signOut }

const analytics = getAnalytics(app)

export { app, auth, googleProvider, signInWithPopup, signOut }
