"use strict";

let iterator = 0;
let typewriterText;

const typewriter = document.querySelector("#typewriter");
typewriterText = typewriter.textContent;
const maxNumberOfItems = typewriterText.length;
console.log(typewriterText);
initLoop();

function initLoop() {
  console.log("initLoop is called");
  loop();
}

function loop() {
  console.log("loop", typewriterText[iterator]);
  iterator++;
  if (iterator <= maxNumberOfItems) {
    setTimeout(loop, 200);
  }
}
