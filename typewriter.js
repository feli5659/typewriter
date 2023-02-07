"use strict";

let iterator = 0;
let typewriterText;

const typewriter = document.querySelector("#typewriter");

initLoop();

function initLoop() {
  console.log("initLoop is called");
  loop();
}

function loop() {
  typewriterText = typewriter.textContent;
  let maxNumberOfItems = typewriterText.length;

  Array.from(typewriterText).forEach((letter, i) => {
    iterator++;
    if (iterator <= maxNumberOfItems) {
      setTimeout(loop, 200);
    }
  });
  console.log(Array.from(typewriterText));
}
