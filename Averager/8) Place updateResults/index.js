"use strict";

function getArrayOfSelectedNumbers(className) {
  let arrayElements = Array.from(document.querySelectorAll("." + className));

  let arrayNumbers = [];

  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);
  }

  return arrayNumbers;

}

function updateResults(className) {

  let array = getArrayOfSelectedNumbers(className);

  let selected = array.join(",");

  let amount = array.length;
  let sum = adder(array);
  let average = roundString(averg(array), 1);


  document.querySelector("#selected span").innerHTML = selected;
  document.querySelector("#amount span").innerHTML = amount;
  document.querySelector("#sum span").innerHTML = sum;
  document.querySelector("#average span").innerHTML = average;

}

//gammal kod 

function roundString(numberWithManyDecimals, decimals) {
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
}

function createNumberDiv() {

  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  numberDiv.addEventListener("click", function () {

    numberDiv.classList.toggle("selected");

    numberDiv.addEventListener("click", updateResults("selected"));
  });



  return numberDiv;

}

function gridMaker(gridContainer, R, C) {
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`

  gridContainer.innerHTML = "";

  let rowCol = R * C
  for (let i = 0; i < rowCol; i++) {
    gridContainer.appendChild(createNumberDiv())
  };
}


function randomNumber(max) {
  return Math.floor(max * Math.random());
}

document.querySelector("button").addEventListener("click", function () {

  gridMaker(document.querySelector("#grid"), 10, 10);


});

function adder(_array) {
  let sum = 0;
  for (let i = 0; i < _array.length; i++) {
    sum = sum + _array[i];
  }
  return sum;
}
function averg(_array) {
  return adder(_array) / _array.length;
}


document.onload = gridMaker(document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);
window.onload = gridMaker(document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);

/*

VIDEO:  Record a video where you explain what happens on these lines:
        console.log( [1,3,4,10,0,1].join() );
        console.log( [1,3,4,10,0,1].join(" - ") );
        This video must be called joinExplanation.

// Join samlar hela arrayen , console loggar 

// Siffrorna innehåller ett binde-streck mellan sifforna i loggen

// = 

*/
