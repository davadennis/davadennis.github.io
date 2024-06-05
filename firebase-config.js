// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ9Dbbsu3oDt4g14ceXYuETPZzyIwb910",
    authDomain: "bank-sampah-19cfe.firebaseapp.com",
    projectId: "bank-sampah-19cfe",
    storageBucket: "bank-sampah-19cfe.appspot.com",
    messagingSenderId: "846385776645",
    appId: "1:846385776645:web:d325c150ed81d8264d746c",
    measurementId: "G-XBJ1S1F04B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
