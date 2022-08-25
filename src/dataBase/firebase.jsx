import firebase  from "firebase";
 

const firebaseConfig = {
    apiKey: "AIzaSyDniwjYZRH8oJWRqT_dprW72YqcWBSEDgI",
    authDomain: "mariojump-18754.firebaseapp.com",
    projectId: "mariojump-18754",
    storageBucket: "mariojump-18754.appspot.com",
    messagingSenderId: "537798532510",
    appId: "1:537798532510:web:3666016bb4b211d0554a8f"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
