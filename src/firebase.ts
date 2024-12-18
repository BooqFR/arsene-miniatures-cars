import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBeg2kFHJ7zy9JXvD_GO-rFHGbXsWkWLA",
  authDomain: "arsene-miniatures.firebaseapp.com",
  projectId: "arsene-miniatures",
  storageBucket: "arsene-miniatures.firebasestorage.app",
  messagingSenderId: "634564269158",
  appId: "1:634564269158:web:da5a6d2822d6827f40c9a7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);