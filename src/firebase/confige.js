import firebase from "firebase/app";
import "firebase/firebasestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCFdViEJ5MNDTlWchnMivRt3LIC7nZCnE",
    authDomain: "new-project-ac484.firebaseapp.com",
    projectId: "new-project-ac484",
    storageBucket: "new-project-ac484.appspot.com",
    messagingSenderId: "973507695170",
    appId: "1:973507695170:web:ed55bef46975c94cefd3db",
    measurementId: "G-2W65QYMTLV",
};
firebase.initializeApp(firebaseConfig);
const projectFirebasestore = firebase.firestore();

export { projectFirebasestore };
