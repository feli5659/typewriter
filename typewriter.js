"use strict";

let iterator = 0;
let typewriterText;
let letter;
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
  iterator++;
  letter = "";

  if (iterator <= maxNumberOfItems) {
    setTimeout(loop, 200);
    letter = typewriterText[iterator - 1];
    typewriter.textContent += letter;
  } 
  console.log(letter);
}
