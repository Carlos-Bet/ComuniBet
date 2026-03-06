import { auth } from "./firebase.js";

const contenedor = document.getElementById("perfil");

auth.onAuthStateChanged(user=>{

if(user){

contenedor.innerHTML=`

<img src="${user.photoURL}" width="80">

<h3>${user.displayName}</h3>

<p>${user.email}</p>

`;

}

});
