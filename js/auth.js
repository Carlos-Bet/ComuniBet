import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs19oiYivfPYSCt_-xcOFeBQMziZSeBno",
  authDomain: "comunibetstudio.firebaseapp.com",
  projectId: "comunibetstudio",
  storageBucket: "comunibetstudio.firebasestorage.app",
  messagingSenderId: "980411984792",
  appId: "1:980411984792:web:c7ab103a9efe8e121e99ed",
  measurementId: "G-P6EJLZRTVV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("loginGoogle").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Usuario:", user);
      alert("Sesión iniciada como " + user.displayName);
    })
    .catch((error) => {
      console.error(error);
    });
});
