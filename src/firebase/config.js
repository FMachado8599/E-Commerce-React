// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG1WidMOxjKBoLO87yO4oPKLmE-C9sSd8",
  authDomain: "boulangerie-react.firebaseapp.com",
  projectId: "boulangerie-react",
  storageBucket: "boulangerie-react.appspot.com",
  messagingSenderId: "644516141450",
  appId: "1:644516141450:web:849b98c68c08fc9d585073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)