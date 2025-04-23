// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

const positiveRandomNumber = Math.floor(Math.random() * 6) + 1
const negativeRandomNumber = Math.floor(Math.random() * 6)* -1

function calculate() {
  // input
  const userInput = document.querySelector('input[name="kind-of-number"]:checked').value;
  // process
  if(userInput === "1") {
    //output
    document.getElementById('results').innerHTML =
      '<p>The random number is:' + positiveRandomNumber + '</p>'
  }
  else {
   // output
    document.getElementById('results').innerHTML =
      '<p>The random number is: ' + negativeRandomNumber + '</p>';
  }
}