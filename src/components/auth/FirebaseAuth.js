import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
export { app, analytics, auth };



const firebaseConfig = {
  apiKey: "AIzaSyB-lnv1et01bnevUBYGe8xecEV_rFntlwg",
  authDomain: "react-login-auth-90ea8.firebaseapp.com",
  projectId: "react-login-auth-90ea8",
  storageBucket: "react-login-auth-90ea8.appspot.com",
  messagingSenderId: "753618320323",
  appId: "1:753618320323:web:b8a38fe09561af51101b76",
  measurementId: "G-224S2RD571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

