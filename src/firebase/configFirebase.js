import firebase from 'firebase/app'
import 'firebase/firestore'
//import 'firebase/autch'
let firebaseConfig = {
    apiKey: "AIzaSyCz9N8hQzRDO6_wePAi4-lmi3zAygxYQe4",
    authDomain: "laaps-d32c5.firebaseapp.com",
    databaseURL: "https://laaps-d32c5.firebaseio.com",
    projectId: "laaps-d32c5",
    storageBucket: "laaps-d32c5.appspot.com",
    messagingSenderId: "449415500097",
    appId: "1:449415500097:web:739f14bef4e2e188c951c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export  {firebase}
  export const db = firebase.firestore();
  
  