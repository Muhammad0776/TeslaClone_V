import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIwKRyBt0rsC1sT9AudpXFBzvkgr27hJ0",
  authDomain: "teslaclone-19ab7.firebaseapp.com",
  projectId: "teslaclone-19ab7",
  storageBucket: "teslaclone-19ab7.appspot.com",
  messagingSenderId: "647342220094",
  appId: "1:647342220094:web:afbc98766a8b305a71426f",
  measurementId: "G-T9REF8EHF3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
