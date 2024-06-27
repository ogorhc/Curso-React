// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxh0hkoDSy0dbwTWO3l92UtiQnfJgLaGc',
  authDomain: 'react-cursos-1c818.firebaseapp.com',
  projectId: 'react-cursos-1c818',
  storageBucket: 'react-cursos-1c818.appspot.com',
  messagingSenderId: '344097369486',
  appId: '1:344097369486:web:e1aa94964cd2e1cb86c8df',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
