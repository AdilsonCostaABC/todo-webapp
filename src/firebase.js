// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1pTQ9kZTVlvZZElbE0qaxe6LxgyN9xzo",
  authDomain: "todo-app-yt-d7653.firebaseapp.com",
  projectId: "todo-app-yt-d7653",
  storageBucket: "todo-app-yt-d7653.appspot.com",
  messagingSenderId: "872692166517",
  appId: "1:872692166517:web:60bfa61ecadf6092522d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);