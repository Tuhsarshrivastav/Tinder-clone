import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_TzxYzCXiLp7q3HzGrRDVqxNDnrlF60o",
  authDomain: "tinder-clone-35d25.firebaseapp.com",
  projectId: "tinder-clone-35d25",
  storageBucket: "tinder-clone-35d25.appspot.com",
  messagingSenderId: "370141677715",
  appId: "1:370141677715:web:9b265dfabe4d81b3b76566",
  measurementId: "G-37CJ4DW8DC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
