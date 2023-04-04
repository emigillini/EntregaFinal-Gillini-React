
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAcI74RWNrpBKR4eGmUCqX0bfjQcpcZzvg",
  authDomain: "carolinska-tumundo.firebaseapp.com",
  projectId: "carolinska-tumundo",
  storageBucket: "carolinska-tumundo.appspot.com",
  messagingSenderId: "737657564974",
  appId: "1:737657564974:web:05b4dafc4a6307798254bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getStorage(app)