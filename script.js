'use strict';

let age, height, weight, result;

// BMI Formula (Metric)
function bmiMetric(weight, height) {
  const bmiMetric = Math.trunc(weight / height ** 2);
  return bmiMetric;
}

document.querySelector('.result').classList.add('hidden');
// Submit button event listener
document.querySelector('.btn--submit').addEventListener('click', function () {
  // Gets values from user (age, height, weight)
  age = Number(document.querySelector('.flex-input-age').value);
  height = Number(document.querySelector('.flex-input-height').value);
  weight = Number(document.querySelector('.flex-input-weight').value);

  // Calculates the BMI using the user values
  result = bmiMetric(weight, height);

  // Checks if any of the input fields were left empty, if it was, throws an error to user.
  if (!age || !height || !weight) {
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector(
      '.result'
    ).textContent = `Error: You missed on of the inputs.`;
  } else {
    // prints final result
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector(
      '.result'
    ).textContent = `Your BMI result is ${result}.`;
  }
});
