// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxM9d1r1_wJONmfNpACvADRBF2jkQcaVA",
  authDomain: "portifolio-4e6d1.firebaseapp.com",
  projectId: "portifolio-4e6d1",
  storageBucket: "portifolio-4e6d1.firebasestorage.app",
  messagingSenderId: "216570112257",
  appId: "1:216570112257:web:c4e1ed117d9e538d87d300",
  measurementId: "G-SCJ5TC4EW9"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };