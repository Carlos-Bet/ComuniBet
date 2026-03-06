import { db } from "./firebase.js";

import {

collection,
query,
orderBy,
onSnapshot

}

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const contenedor = document.getElementById("posts");

const q = query(

collection(db,"publicaciones"),
orderBy("timestamp","desc")

);

onSnapshot(q,(snapshot)=>{

contenedor.innerHTML="";

snapshot.forEach(doc=>{

const post = doc.data();

contenedor.innerHTML+=`

<div class="post">

<p>${post.texto}</p>

</div>

`;

});

});
