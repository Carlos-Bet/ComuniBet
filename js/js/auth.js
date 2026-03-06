import { auth } from "./firebase.js";

import { GoogleAuthProvider, signInWithPopup, signOut }

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

window.loginGoogle = async function(){

const result = await signInWithPopup(auth,provider);

if(result.user){

location.href="foro.html";

}

}

window.logout = async function(){

await signOut(auth);

location.href="index.html";

}
