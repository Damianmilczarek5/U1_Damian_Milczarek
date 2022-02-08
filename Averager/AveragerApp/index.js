"use strict";

// Include the link to your Github Repository here:
// Link:

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

function createNumberDiv() {
  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  numberDiv.addEventListener("click", function () {
    numberDiv.classList.toggle("selected");

    numberDiv.addEventListener("click", updateResults("selected"));
  });

  return numberDiv;
}

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

function gridMaker(gridContainer, R, C) {
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

  gridContainer.innerHTML = "";

  let rowCol = R * C;
  for (let i = 0; i < rowCol; i++) {
    gridContainer.appendChild(createNumberDiv());
  }
}

function randomNumber(max) {
  return Math.floor(max * Math.random());
}

function roundString(numberWithManyDecimals, decimals) {
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(
    decimals
  );
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

document.querySelector("button").addEventListener("click", function () {
  let elementReferens = document.querySelector("#grid");
  let nRows = document.querySelector("#inputRows").value;
  let nCols = document.querySelector("#inputCols").value;

  gridMaker(elementReferens, nRows, nCols);

  document.querySelector("#selected span").innerHTML = "";
  document.querySelector("#amount span").innerHTML = "";
  document.querySelector("#sum span").innerHTML = "";
  document.querySelector("#average span").innerHTML = "";
});

document.onload = gridMaker(
  document.querySelector("#grid"),
  document.querySelector("#inputRows").value,
  document.querySelector("#inputCols").value
);
window.onload = gridMaker(
  document.querySelector("#grid"),
  document.querySelector("#inputRows").value,
  document.querySelector("#inputCols").value
);
