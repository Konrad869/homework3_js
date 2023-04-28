"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("gwiazdka");

  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    const rowElement = document.createElement("p");
    rowElement.innerHTML = row;
    container.appendChild(rowElement);
  }
});
