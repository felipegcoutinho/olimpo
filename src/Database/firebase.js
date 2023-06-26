import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUlAKicsC8oK_APyIAxkdFx-aBba-RT-U",
  authDomain: "projeto-olimpo-b44f3.firebaseapp.com",
  databaseURL: "https://projeto-olimpo-b44f3-default-rtdb.firebaseio.com",
  projectId: "projeto-olimpo-b44f3",
  storageBucket: "projeto-olimpo-b44f3.appspot.com",
  messagingSenderId: "91467325419",
  appId: "1:91467325419:web:9e090b87b915ca8c9a83ae",
  measurementId: "G-PX78YMDM1T",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);

export {app, db};
