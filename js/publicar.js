import { db } from "./firebase.js";

import { collection, addDoc, serverTimestamp }

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.crearPost = async function(){

const texto = document.getElementById("textoPost").value;

if(!texto)return;

await addDoc(

collection(db,"publicaciones"),

{

texto:texto,
timestamp:serverTimestamp()

}

);

alert("Publicado");

}
