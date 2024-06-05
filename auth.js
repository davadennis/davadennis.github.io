// auth.js
import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Function to handle login
export async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error("Error logging in:", error);
        alert("Login failed: " + error.message);
    }
}

// Function to handle registration
export async function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            points: 0
        });
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error("Error registering:", error);
        alert("Registration failed: " + error.message);
    }
}
