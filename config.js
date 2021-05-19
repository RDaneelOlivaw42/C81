import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBqTLZqFO03lukVtXSug5kAM6MBsA0nuiE",
  authDomain: "book-santa-c77-50ba2.firebaseapp.com",
  projectId: "book-santa-c77-50ba2",
  storageBucket: "book-santa-c77-50ba2.appspot.com",
  messagingSenderId: "526190980388",
  appId: "1:526190980388:web:d56da538b48a889c8997b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();