"use strict";

// variables y selectores a utilizar
var color = document.querySelector('#color');
var salidaColor = document.querySelector('.salida');
var btn = document.querySelector('.btn');
var storage = localStorage.getItem('colorValue') || '#000000';
color.value = storage; 

eventListeners();
setColor();

function eventListeners() {
  btn.addEventListener('click', setColor);
}


function setColor() {
  var value = color.value;
  salidaColor.textContent = value;
  salidaColor.style.backgroundColor = value;
  saveColor(value);
}

function saveColor(value) {
  localStorage.setItem('colorValue', value);
}