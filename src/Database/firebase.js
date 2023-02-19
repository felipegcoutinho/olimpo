import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByNs_4OCVVtBf-zpczvjX4pVS9OZM-MVc",
  authDomain: "olimpo-ffcf2.firebaseapp.com",
  databaseURL: "https://olimpo-ffcf2-default-rtdb.firebaseio.com",
  projectId: "olimpo-ffcf2",
  storageBucket: "olimpo-ffcf2.appspot.com",
  messagingSenderId: "511968614236",
  appId: "1:511968614236:web:8be3a1cd5c1c3da389d399",
  measurementId: "G-55K36DT8FW",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {app, db};
