import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "TU_API",
authDomain: "comunibetstudio.firebaseapp.com",
projectId: "comunibetstudio",
storageBucket: "comunibetstudio.firebasestorage.app",
messagingSenderId: "980411984792",
appId: "1:980411984792:web:c7ab103a9efe8e121e99ed"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
