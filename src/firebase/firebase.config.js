// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp8praUsTConMOKltAL2SEiytdSl2NzUo",
  authDomain: "new-abacus-academy.firebaseapp.com",
  projectId: "new-abacus-academy",
  storageBucket: "new-abacus-academy.appspot.com",
  messagingSenderId: "172821198529",
  appId: "1:172821198529:web:278bb38a0e2cfefcc30640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;