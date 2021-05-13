import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCFC4_LN0sxa5QfhcE8LIznl5Y2YrybvMg",
    authDomain: "school-attendance-app-d44bf.firebaseapp.com",
    databaseURL: "https://school-attendance-app-d44bf.firebaseio.com",
    projectId: "school-attendance-app-d44bf",
    storageBucket: "school-attendance-app-d44bf.appspot.com",
    messagingSenderId: "925703213540",
    appId: "1:925703213540:web:d2572fa3a5cea97af2f7f1",
    measurementId: "G-BRH3VSK2LY"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} 
 
  export default firebase.database();
