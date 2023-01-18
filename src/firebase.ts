import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaicDv4kqToZmSmZXX2hG-Ou4sUADJUPY",
  authDomain: "saylani-web-851eb.firebaseapp.com",
  projectId: "saylani-web-851eb",
  storageBucket: "saylani-web-851eb.appspot.com",
  messagingSenderId: "281891401008",
  appId: "1:281891401008:web:9005c91899221d2c1c2cf5",
};

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
