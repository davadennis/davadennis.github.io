// auth.js
import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Function to handle login
export async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        console.log("Login successful:", user);

        // Redirect to dashboard
        window.location.href = `dashboard.html?uid=${user.uid}`;
    } catch (error) {
        console.error("Login error:", error);
        alert("Username atau password salah.");
    }
}

// Function to handle registration
export async function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const points = 0; // Initial points

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;

        // Add user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            points: points
        });

        console.log("Registration successful:", user);
        // Redirect to login
        window.location.href = "index.html";
    } catch (error) {
        console.error("Registration error:", error);
        alert("Error creating user.");
    }
}
