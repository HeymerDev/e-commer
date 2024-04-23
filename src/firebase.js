import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHVo35BeBkYRFmjJoGmGKW9m6Lnln7hGs",
  authDomain: "react-firebase-6c8ff.firebaseapp.com",
  projectId: "react-firebase-6c8ff",
  storageBucket: "react-firebase-6c8ff.appspot.com",
  messagingSenderId: "683106310390",
  appId: "1:683106310390:web:e54a721d1039e625ab74d7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
