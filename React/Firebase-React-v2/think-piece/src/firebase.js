import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqKr1KxHZeinnIKxKlutYcRq5fSu7FI9A",
  authDomain: "think-piece-f791b.firebaseapp.com",
  projectId: "think-piece-f791b",
  storageBucket: "think-piece-f791b.appspot.com",
  messagingSenderId: "435633068443",
  appId: "1:435633068443:web:80fcfaa30153f98ae9293e",
  measurementId: "G-N1VPN2JC5R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
