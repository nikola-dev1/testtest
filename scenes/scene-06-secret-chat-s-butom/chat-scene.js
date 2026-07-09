/* =========================================================
   SECRET CHAT — SCENA 1 / SCENA 2 SKRIPTA
   =========================================================
   ZA SCENU 2: promeni samo TYPING_DURATION ispod (5000 -> 10000)
   Sve ostalo ostaje isto.
   ========================================================= */

const TYPING_DURATION = 5000; // ms — SAMO OVO MENJAS ZA SCENU 2 (10000)
const TYPING_START_DELAY = 1500; // ms — koliko ceka PRE nego sto "typing..." pocne da se prikazuje (steluj po potrebi)

const YOU_NAME    = "ETAR";
const CONTACT_NAME = "SVEDENBORG";

/* Redosled odgovora sagovornika, jedan po jedan, nakon svake
   poslate poruke glumca. null = nema odgovora (kraj scene). */
const replyQueue = [
  "imamo",
  null
];

let replyIndex = 0;

function addMessage(text, type, username){
  const wrap = document.getElementById("messages");
  if(!wrap) return;
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.setAttribute("data-user", username);
  div.innerText = text;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}

function sendMessage(){
  const input = document.getElementById("msgInput");
  const text = input.value;
  if(!text.trim()) return;

  addMessage(text, "me", YOU_NAME);
  input.value = "";

  const reply = replyQueue[replyIndex];
  replyIndex++;

  if(reply === undefined || reply === null) return;

  const typing = document.getElementById("typing");

  setTimeout(()=>{
    typing.style.opacity = 1;

    setTimeout(()=>{
      typing.style.opacity = 0;
      addMessage(reply, "bot", CONTACT_NAME);
    }, TYPING_DURATION);
  }, TYPING_START_DELAY);
}

/* Preloaduje prvu poruku sagovornika (vec "stigla" kad glumac sedne) */
function preloadInitialMessage(){
  addMessage("ovde sam", "bot", CONTACT_NAME);
}

/* Postavi labelu na typing indikator prema CONTACT_NAME */
document.addEventListener("DOMContentLoaded", ()=>{
  const label = document.querySelector(".typing-label");
  if(label) label.textContent = CONTACT_NAME + " TYPING";
});
