import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import FirebaseModule from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpPO9JjeTKF1Ny3WPkg_N8A10iZuzVr5A",
  authDomain: "particle-silo.firebaseapp.com",
  databaseURL: "https://particle-silo.firebaseio.com",
  projectId: "particle-silo",
  storageBucket: "particle-silo.appspot.com",
  messagingSenderId: "930203734678",
  appId: "1:930203734678:web:06de0904476dfd46aca8b7",
};
let firebaseInitialized = false;

FirebaseModule.initializeApp({
  apiKey: "AIzaSyBpPO9JjeTKF1Ny3WPkg_N8A10iZuzVr5A",
  authDomain: "particle-silo.firebaseapp.com",
  databaseURL: "https://particle-silo.firebaseio.com",
  projectId: "particle-silo",
  storageBucket: "particle-silo.appspot.com",
  messagingSenderId: "930203734678",
  appId: "1:930203734678:web:06de0904476dfd46aca8b7",
});

firebaseInitialized = true;

let db;
let storage;
let auth;

if (firebaseInitialized) {
  // Initialize Cloud Firestore through Firebase
  db = FirebaseModule.firestore();

  // Initialize Storage through Firebase
  storage = FirebaseModule.storage();
  auth = FirebaseModule.auth();
}

export const Firebase = firebaseInitialized ? FirebaseModule : null;
export const FirebaseAuth = firebaseInitialized ? auth : null;
export const FirebaseDB = firebaseInitialized ? db : null;
export const FirebaseStorage = firebaseInitialized ? storage : null;
