import firebase  from "firebase";
 

const firebaseConfig = {
  apiKey: "AIzaSyC73_BRO5jM6410MankxdXROEDcQELicU4",
  authDomain: "supermariojumprcrud.firebaseapp.com",
  databaseURL: "https://supermariojumprcrud-default-rtdb.firebaseio.com",
  projectId: "supermariojumprcrud",
  storageBucket: "supermariojumprcrud.appspot.com",
  messagingSenderId: "276333432728",
  appId: "1:276333432728:web:ab7884e198d0495ad9a5ed"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;
