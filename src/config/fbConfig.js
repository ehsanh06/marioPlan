import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD40HgzOkRwnRzEJjw3PvGIb3-8p6ks8sM",
    authDomain: "marioplan-a5e23.firebaseapp.com",
    databaseURL: "https://marioplan-a5e23.firebaseio.com",
    projectId: "marioplan-a5e23",
    storageBucket: "marioplan-a5e23.appspot.com",
    messagingSenderId: "490873929515"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;