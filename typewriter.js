"use strict";

let iterator = 0;

let letter;
const typewriter = document.querySelector("#typewriter");
let typewriterText = typewriter.textContent;
const maxNumberOfItems = typewriterText.length;
typewriter.textContent = "";
initLoop();

function initLoop() {
  loop();
}

function loop() {
  iterator++;
  letter = "";
  

  if (iterator <= maxNumberOfItems) {
    setTimeout(loop, 200);
    letter = typewriterText[iterator - 1];
    typewriter.textContent += letter;
  }
  console.log(letter);
}
