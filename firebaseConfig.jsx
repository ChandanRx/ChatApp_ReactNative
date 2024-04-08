// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence,initializeAuth} from 'firebase/auth'
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore,collection} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl1CbJKq-Mmf9b4frFgwIpK3Tb6ivDKL8",
  authDomain: "chatapp-282a3.firebaseapp.com",
  projectId: "chatapp-282a3",
  storageBucket: "chatapp-282a3.appspot.com",
  messagingSenderId: "314919006405",
  appId: "1:314919006405:web:636c6bb8a92739b66880ac",
  measurementId: "G-JZ0ERLC5HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)

export const userRef = collection(db,'users')
export const roomRef = collection(db,'rooms')