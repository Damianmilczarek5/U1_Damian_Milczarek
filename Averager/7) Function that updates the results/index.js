"use strict";

/*

By now, you whould have a JS-program that fills a grid of X columns and Y rows
with random numbers (a div for each) between 0 and 99.
The values of R and C come from the input fields.

Now we will add code so that we can select and deselect numbers
from the grid by clicking on them.

*/

function gridMaker(gridContainer, R, C) {
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  gridContainer.innerHTML = "";
  let nTotal = R * C;
  for (let i = 0; i < nTotal; i++) {
    gridContainer.appendChild(createNumberDiv());
    /*
      for (let i=0; i < R; R++) {
      for (let j=0; j < C; C++)
      gridContainer.appendChild( createNumberDiv() );
      }
    */ //
  }
}

function createNumberDiv() {
  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  numberDiv.addEventListener("click", function () {
    numberDiv.classList.toggle("selected");
  });

  return numberDiv;
}

function randomNumber(max) {
  return Math.floor(max * Math.random());
} // Deklarerar random  nummer

document.querySelector("button").addEventListener("click", function () {
  let elementReferens = document.querySelector("#grid");
  let nRows = document.querySelector("#inputRows").value;
  let nCols = document.querySelector("#inputCols").value;

  gridMaker(elementReferens, nRows, nCols);
});

/*

The idea is to use the functions we created at the beginning (adder, averg) to
calculate the results. The problem is that we do not have an array with the
numbers that the user has selected.

You do not need to code, or understand, that function. I have included below the
function getArrayOfSelectedNumbers. That function will return an array (a reference to
an array) that contains all the numbers that the user has selected.

The function getArrayOfSelectedNumbers does the following:
  1)  Declares an empty array
  2)  Goes through all the numberDivs in the grid and fills the 
      array with the numbers that are selected. In other words,
      with the numbers whose numberDiv has the class className
  3)  Returns the array with all the numbers whose numberDiv has the class className

  NOTE that you need to set the argument className when you make the function call
*/

function getArrayOfSelectedNumbers(className) {
  // This weird line creates an array with all the numberDivs that have the
  // class className. Naturally, when you call this function, you will need
  // to assign a value to className. What value should that be, do you think?
  // The reference to the array is stored in arrayElements
  let arrayElements = Array.from(document.querySelectorAll("." + className));

  // Create a new array and store its reference in arrayNumbers
  let arrayNumbers = [];

  // Iterate through all the elements in arrayElements.
  // For each numberDiv in arrayElements create a new element in arrayNumbers
  // with the numeric value of the random number.
  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);
  }

  // Make the array of numbers available outside the function
  return arrayNumbers;
}

function roundString(numberWithManyDecimals, decimals) {
  // From: https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(
    decimals
  );
}

/*

VIDEO:  Record a video where you explain what happens on these lines:
        console.log( [1,3,4,10,0,1].join() );
        console.log( [1,3,4,10,0,1].join(" - ") );
        This video must be called joinExplanation.

*/
