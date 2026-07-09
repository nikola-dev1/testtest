function search(){

const value =
document.getElementById("searchInput").value.toLowerCase();

if(value.includes("tepih")){

window.location.href="./serp-tepih.html";

}

}

function goTepih(){

window.location.href="./tepih-servis.html";

}

/* PIGEON */

const pigeon =
document.getElementById("pigeon");

if(pigeon){

pigeon.addEventListener("click",()=>{

pigeon.style.transform =
"translate(600px,-300px) rotate(720deg)";
pigeon.style.opacity = "0";

setTimeout(()=>{

window.location.href="./auth.html";

},1800);

});

}

/* AUTH */

function checkCode(){

const value =
document.getElementById("passcode").value;

const logs =
document.getElementById("logs");

logs.innerHTML = "";

if(value !== "-cšewđ'',mcc,-"){

logs.innerHTML =
"<div>ACCESS DENIED</div>";

return;

}

const messages = [

"Initializing secure tunnel...",
"Verifying access key...",
"Decrypting session...",
"Authorizing node...",
"Connection established..."

];

let i = 0;

const interval = setInterval(()=>{

logs.innerHTML +=
`<div>${messages[i]}</div>`;

i++;

if(i >= messages.length){

clearInterval(interval);

setTimeout(()=>{

window.location.href="./chat.html";

},1200);

}

},900);

}

/* CHAT */

const responses = {

"zdravo":"Cekam signal.",
"gde si":"Na staroj lokaciji.",
"edison":"Ne spominji to ime.",
"ko si":"Posmatrac."

};

function addMessage(text,type){

const wrap =
document.getElementById("messages");

if(!wrap) return;

const div =
document.createElement("div");

div.className =
`message ${type}`;

div.innerText = text;

wrap.appendChild(div);

wrap.scrollTop = wrap.scrollHeight;

}

function sendMessage(){

const input =
document.getElementById("msgInput");

const text =
input.value.toLowerCase();

if(!text) return;

addMessage(text,"me");

input.value = "";

const typing =
document.getElementById("typing");

typing.style.opacity = 1;

setTimeout(()=>{

typing.style.opacity = 0;

const response =
responses[text] ||
"Poruka primljena.";

addMessage(response,"bot");

},2000);

}