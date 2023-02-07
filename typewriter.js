"use strict";

let iterator = 0;

let letter;
const typewriter = document.querySelector("#typewriter");
let typewriterText = typewriter.textContent;
const maxNumberOfItems = typewriterText.length;
// empties #typewriter content before the loop
typewriter.textContent = "";

// // Audio #typekey1
// document.querySelector("#typekey1").volume = 1;
// document.querySelector("#typekey1").currentTime = 0;
// document.querySelector("#typekey1").play();
// // Audio #typekey2
// document.querySelector("#typekey2").volume = 1;
// document.querySelector("#typekey2").currentTime = 0;
// document.querySelector("#typekey2").play();

initLoop();

function initLoop() {
  loop();
}

function loop() {
  iterator++;
  letter = "";

  // this loops through each letter with delay of 200 and
  if (iterator <= maxNumberOfItems) {
    setTimeout(loop, 200);
    letter = typewriterText[iterator - 1];
    typewriter.textContent += letter;
    if (letter == " ") {
      // Audio #typespace
      document.querySelector("#typespace").volume = 1;
      document.querySelector("#typespace").currentTime = 0;
      document.querySelector("#typespace").play();
    } else {
      //   Audio #typekey1
      document.querySelector("#typekey1").volume = 1;
      document.querySelector("#typekey1").currentTime = 0;
      document.querySelector("#typekey1").play();
      // document.querySelector("#typekey2").volume = 1;
      // document.querySelector("#typekey2").currentTime = 0;
      // document.querySelector("#typekey2").play();
    }
    // audio return at end
    document.querySelector("#typereturn").volume = 1;
    document.querySelector("#typereturn").currentTime = 0;
    document.querySelector("#typereturn").play();
    console.log(letter);
  }
}
