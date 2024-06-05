// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTUUvgdp2dFhZ2OfIFTxPCE4i1H0dzLG0",
    authDomain: "dade-nett.firebaseapp.com",
    projectId: "dade-nett",
    storageBucket: "dade-nett.appspot.com",
    messagingSenderId: "555456431199",
    appId: "1:555456431199:web:63f714c5d1febfd1c747ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
