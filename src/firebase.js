import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
     // Your web app's Firebase configuration  
    apiKey: "AIzaSyDjYzwDbReXFoaFT8frv8MiZcGZlAG98yM",
    authDomain: "diary-9e273.firebaseapp.com",
    databaseURL: "https://diary-9e273.firebaseio.com",
    projectId: "diary-9e273",
    storageBucket: "diary-9e273.appspot.com",
    messagingSenderId: "995338136705",
    appId: "1:995338136705:web:a539b9147f2c5e46fbb180"
});

export const db = firebaseApp.database().ref("notes");

