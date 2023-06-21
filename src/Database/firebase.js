import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVR0Fsh-M-DRt4foegO890hO46iExve10",
  authDomain: "olimpo-v2.firebaseapp.com",
  databaseURL: "https://olimpo-v2-default-rtdb.firebaseio.com",
  projectId: "olimpo-v2",
  storageBucket: "olimpo-v2.appspot.com",
  messagingSenderId: "956720428518",
  appId: "1:956720428518:web:ac3fdc4b1e1d55a2731227",
  measurementId: "G-3P54DG2KKR",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);

export {app, db};
