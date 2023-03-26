import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGkpiIjy2u8t9UNB1MnL4DOkOWUiDbs4s",
  authDomain: "mismanospueden-b274c.firebaseapp.com",
  projectId: "mismanospueden-b274c",
  storageBucket: "mismanospueden-b274c.appspot.com",
  messagingSenderId: "342308014802",
  appId: "1:342308014802:web:69a10029893cd4fa66bb0b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)