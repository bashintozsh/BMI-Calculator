'use strict';

let age, height, weight;

document.querySelector('.btn--submit').addEventListener('click', function () {
  age = Number(document.querySelector('.age').value);
  height = Number(document.querySelector('.height').value);
  weight = Number(document.querySelector('.weight').value);
});
