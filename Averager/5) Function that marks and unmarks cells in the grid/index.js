"use strict";

/*

By now, you whould have a JS-program that fills a grid of X columns and Y rows
with random numbers (a div for each) between 0 and 99.
The values of R and C come from the input fields.

Now we will add code so that we can select and deselect numbers
from the grid by clicking on them.

*/


/*

STEP 1
The first thing we need is a CSS-class called selected.
Add CSS-rules for .selected to the CSS-file. A change of 
background-color and color is enough but feel free!

*/


/*

STEP 2
Now you need to understand how elementRef.classList.toggle() works.
Check it out here:
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
or here:
https://www.w3schools.com/howto/howto_js_toggle_class.asp

*/

function gridMaker(gridContainer, R, C) {
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
    gridContainer.innerHTML = ""
    let nTotal = R * C;
  for (let i = 0; i < nTotal; i++) {
    gridContainer.appendChild(createNumberDiv());
    /*
      for (let i=0; i < R; R++) {
      for (let j=0; j < C; C++)
      gridContainer.appendChild( createNumberDiv() );
      }
    */  // 
  }
}  

  
  function createNumberDiv() {
    let numberDiv = document.createElement("div");
    numberDiv.innerHTML = randomNumber(100);

    numberDiv.addEventListener("click", function() {

        numberDiv.classList.toggle("selected")
    })
  
    return numberDiv;
  }
  
  function randomNumber(max) {
    return Math.floor(max * Math.random());
  }   // Deklarerar random  nummer

  document.querySelector("button").addEventListener("click", function () {

    let elementReferens = document.querySelector("#grid");
    let nRows = document.querySelector("#inputRows").value;
    let nCols = document.querySelector("#inputCols").value;
  
    gridMaker( elementReferens, nRows, nCols );
  
  });