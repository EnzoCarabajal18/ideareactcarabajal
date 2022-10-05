
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW5589eJtQnPrDiW15BEGpVHicvnE_gGU",
  authDomain: "coderprueba-5a814.firebaseapp.com",
  projectId: "coderprueba-5a814",
  storageBucket: "coderprueba-5a814.appspot.com",
  messagingSenderId: "319104377837",
  appId: "1:319104377837:web:a1816249b0e8d9d9c77de4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

