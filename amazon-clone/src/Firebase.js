import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRNNbytWd8OO8XWcevcR0dcQmMHxUBmGI",
  authDomain: "clone-e1872.firebaseapp.com",
  databaseURL: "https://clone-e1872.firebaseio.com",
  projectId: "clone-e1872",
  storageBucket: "clone-e1872.appspot.com",
  messagingSenderId: "950409520682",
  appId: "1:950409520682:web:bd0e61db9a46f3c6118553",
  measurementId: "G-XX444Z7YNZ",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
