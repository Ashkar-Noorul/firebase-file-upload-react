// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHEb0IETUk_BqD_ZiuCRNuIeTch_2Q8Qs",
  authDomain: "uploadfileproject-10d0f.firebaseapp.com",
  projectId: "uploadfileproject-10d0f",
  storageBucket: "uploadfileproject-10d0f.appspot.com",
  messagingSenderId: "324961623710",
  appId: "1:324961623710:web:9ca400076a0ca105a3e58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)