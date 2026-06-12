
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-prep-ai-4ed33.firebaseapp.com",
  projectId: "interview-prep-ai-4ed33",
  storageBucket: "interview-prep-ai-4ed33.firebasestorage.app",
  messagingSenderId: "602877645359",
  appId: "1:602877645359:web:de0e00d14346e3c0f42cda"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}