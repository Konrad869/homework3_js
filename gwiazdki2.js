"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("gwiazdka-dwa");

  for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    const rowElement = document.createElement("p");
    rowElement.innerHTML = row;
    container.appendChild(rowElement);
  }
});
