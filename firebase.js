import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD--dwmVBa6pNvxGKTPZktadg1qMQHQR8U",
  authDomain: "react-notes-601a9.firebaseapp.com",
  projectId: "react-notes-601a9",
  storageBucket: "react-notes-601a9.appspot.com",
  messagingSenderId: "108455448950",
  appId: "1:108455448950:web:305d1f498a0c36bbcb6a57"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")