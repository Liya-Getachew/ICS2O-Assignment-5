// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Dec 19 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-5/sw.js", {
    scope: "/ICS2O-Assignment-5/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let text = document.getElementById("userInput").value
  let reversed = ""
  for (let counter = text.length - 1; counter >= 0; counter--) {
    reversed += text[counter]
  }
  document.getElementById("answer").innerHTML = reversed
}
