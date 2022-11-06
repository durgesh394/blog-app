
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx3qwEAxQX7tqoCIz9Z2sR9rHAeM2miQc",
  authDomain: "blog-project-c476d.firebaseapp.com",
  projectId: "blog-project-c476d",
  storageBucket: "blog-project-c476d.appspot.com",
  messagingSenderId: "978463741485",
  appId: "1:978463741485:web:9884c141e4eadf3d964aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);