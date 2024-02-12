// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-npCVTVibBoY9B9-QqquY9vcAkgtS46I",
  authDomain: "aeli-projects.firebaseapp.com",
  databaseURL: "https://aeli-projects-default-rtdb.firebaseio.com",
  projectId: "aeli-projects",
  storageBucket: "aeli-projects.appspot.com",
  messagingSenderId: "319304316098",
  appId: "1:319304316098:web:11817e4ce00503a852775b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
