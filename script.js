'use strict';

let age, height, heightImperial, weight, result, health;
let history = [];
let count = 1;

// BMI Formula (Metric)
function bmiMetric(weight, height) {
  const bmiMetric = Math.trunc(weight / height ** 2).toFixed(2);
  return bmiMetric;
}

// BMI Formula (Imperial)
function bmiImperial(weight, height) {
  height = height * 12 + heightImperial;
  const bmiImperial = ((weight / height ** 2) * 703).toFixed(2);
  return bmiImperial;
}

// isChecked function
function isChecked(element) {
  const isChecked = document.querySelector(`.${element}`).checked;
  return isChecked;
}

// Imperial event

document.querySelector('.unit-radio-2').addEventListener('click', function () {
  if (isChecked(`unit-radio-2`)) {
    document.querySelector('.input-height').textContent =
      'Your height (in feet and inches)';
    document.querySelector('.input-weight').textContent =
      'Your weight: (in lbs)';
    document
      .querySelector('.flex-input-height-imperial')
      .classList.remove('hidden');
    document.querySelector('.flex-input-weight').value = '';
    document.querySelector('.flex-input-height').value = '';
    document.querySelector('.flex-input-height-imperial').value = '';
  }
});

// Metric event

document.querySelector('.unit-radio-1').addEventListener('click', function () {
  if (isChecked(`unit-radio-1`)) {
    document.querySelector('.input-height').textContent =
      'Your height (in x.xx cm):';
    document.querySelector('.input-weight').textContent =
      'Your weight: (in kg)';
    document
      .querySelector('.flex-input-height-imperial')
      .classList.add('hidden');
    document.querySelector('.flex-input-weight').value = '';
    document.querySelector('.flex-input-height').value = '';
  }
});

document.querySelector('.result').classList.add('hidden');
// Submit button event listener
document.querySelector('.btn--submit').addEventListener('click', function () {
  // Reset indicators

  document.querySelector('.obese').classList.add('hidden');
  document.querySelector('.underweight').classList.add('hidden');
  document.querySelector('.healthy').classList.add('hidden');
  document.querySelector('.overweight').classList.add('hidden');

  // Gets values from user (age, height, weight)
  age = Number(document.querySelector('.flex-input-age').value);
  height = Number(document.querySelector('.flex-input-height').value);

  heightImperial = Number(
    document.querySelector('.flex-input-height-imperial').value
  );

  weight = Number(document.querySelector('.flex-input-weight').value);

  // Calculates the BMI using the user values
  if (isChecked(`unit-radio-1`)) {
    result = bmiMetric(weight, height);
  } else if (isChecked(`unit-radio-2`)) {
    result = bmiImperial(weight, height);
    console.log(height);
  }

  // Healthiness checker

  if (result < 18.5) {
    health = 'underweight';
    document
      .querySelector('.flexbox-item-indicator')
      .classList.remove('hidden');
    document.querySelector('.underweight').classList.remove('hidden');
  } else if (result > 18.5 && result < 24.9) {
    health = 'healthy';
    document
      .querySelector('.flexbox-item-indicator')
      .classList.remove('hidden');
    document.querySelector('.healthy').classList.remove('hidden');
  } else if (result > 25 && result < 29.9) {
    health = 'overweight';
    document
      .querySelector('.flexbox-item-indicator')
      .classList.remove('hidden');
    document.querySelector('.overweight').classList.remove('hidden');
  } else if (result > 30) {
    health = 'obese';
    document
      .querySelector('.flexbox-item-indicator')
      .classList.remove('hidden');
    document.querySelector('.obese').classList.remove('hidden');
  }

  // History logic

  const table = document.querySelector('table');
  const row = table.insertRow();

  const td0 = row.insertCell(0);
  const td1 = row.insertCell(1);
  const td2 = row.insertCell(2);
  const td3 = row.insertCell(3);
  const td4 = row.insertCell(4);
  const td5 = row.insertCell(5);
  let temphistory = [];

  history.push(age, height, weight, result, health);

  td0.innerText = count;
  td1.innerText = history[0];
  td2.innerText = history[1];
  td3.innerText = history[2];
  td4.innerText = history[3];
  td5.innerText = history[4];

  history = [];
  count++;

  if (!age || !height || !weight) {
    // Checks if any of the input fields were left empty, if it was, throws an error to user.
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector(
      '.result'
    ).textContent = `Error: You missed on one of the inputs.`;
  } else {
    // prints final result
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector(
      '.result'
    ).textContent = `Your BMI result is ${result}, which is ${health}.`;
  }
});

// History button

document.querySelector('.btn--history').addEventListener('click', function () {
  document.querySelector('.modal').classList.remove('hidden');
});

// Modal close button

document.querySelector('.btn--close').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
});
