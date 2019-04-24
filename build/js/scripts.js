"use strict";

var boxLeft = document.createElement('div');
var boxRight = document.createElement('div');
var boxLeftBottom = document.createElement('div');
var boxRightBottom = document.createElement('div');

var setStyle = function setStyle(elem, obj) {
  var keys = Object.keys(obj);
  keys.map(function (e) {
    return elem.style[e] = obj[e];
  });
};

var bl = {
  position: "fixed",
  top: "1rem",
  left: "1rem",
  color: "#fff"
};
var br = {
  position: "fixed",
  top: "1rem",
  right: "1rem",
  color: "#000"
};
var bbl = {
  position: "fixed",
  bottom: "1rem",
  left: "1rem",
  color: "#000"
};
var bbr = {
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
  color: "#fff"
};
setStyle(boxLeft, bl);
setStyle(boxRight, br);
setStyle(boxLeftBottom, bbl);
setStyle(boxRightBottom, bbr);
document.body.appendChild(boxLeft);
document.body.appendChild(boxRight);
document.body.appendChild(boxLeftBottom);
document.body.appendChild(boxRightBottom);

function setWidth(e) {
  boxLeft.textContent = window.outerWidth;
  boxRight.textContent = window.outerWidth;
  boxLeftBottom.textContent = window.outerWidth;
  boxRightBottom.textContent = window.outerWidth;
}

window.addEventListener('resize', repeatOften);

function repeatOften() {
  requestAnimationFrame(setWidth);
}

repeatOften();