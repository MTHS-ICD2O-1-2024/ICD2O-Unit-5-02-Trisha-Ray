// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'
/**
 * This function checks if the user has selected a random number
 */
function calculate() {
  // input
  const userInput = document.getElementById("option-positive").checked;

  // process
  const positiveRandomNumber = Math.floor(Math.random() * 6) + 1;
  const negativeRandomNumber = -1 * (Math.floor(Math.random() * 6) + 1);

  // output
  if (userInput) {
    document.getElementById('results').innerHTML =
      '<p>The random number is: ' + positiveRandomNumber + '</p>';
  } else {
    document.getElementById('results').innerHTML =
      '<p>The random number is: ' + negativeRandomNumber + '</p>';
  }
}
