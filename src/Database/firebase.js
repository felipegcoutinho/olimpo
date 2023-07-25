import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-_FiHGvtn8IyT9UbhSWnSYcfW60bHXj8",
  authDomain: "projeto-olimpo-v2.firebaseapp.com",
  projectId: "projeto-olimpo-v2",
  storageBucket: "projeto-olimpo-v2.appspot.com",
  messagingSenderId: "887455701643",
  appId: "1:887455701643:web:5952221f6e524741aa928e",
  measurementId: "G-1313BFZCRM",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);

export {app, db};
