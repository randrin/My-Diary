import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNoeeOQ6BVFA0RXtAbHGfDuExhC-qgjQk",
  authDomain: "my-diary-10e8d.firebaseapp.com",
  databaseURL: "https://my-diary-10e8d.firebaseio.com",
  projectId: "my-diary-10e8d",
  storageBucket: "my-diary-10e8d.appspot.com",
  messagingSenderId: "904064835577",
  appId: "1:904064835577:web:2f976d0e028c8351fda728",
  measurementId: "G-8Y7TG34R8J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("/notes");
