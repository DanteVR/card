/*
* Author: Dante Villa
*/

let a = document.getElementById('a');
let b = document.getElementById('b');

// First button
a.addEventListener('mouseenter', function () {
  let o = this.firstChild.nodeValue;
  if (o == "No") {
    this.firstChild.nodeValue = "Si";
    b.firstChild.nodeValue = "No";
  }
});

// Second button
b.addEventListener('mouseenter', function () {
  let o = this.firstChild.nodeValue;
  if (o == "No") {
    this.firstChild.nodeValue = "Si";
    a.firstChild.nodeValue = "No";
  }
});