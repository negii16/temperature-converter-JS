
const form = document.getElementById("converter");
const tempInput = document.getElementById("temp");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultBox = document.getElementById("result");
const swapBtn = document.getElementById("swap");
const errorMsg = document.getElementById("err");

// Conversion logic
function convertTemperature(value, from, to) {
  if (from === to) return value;

  let celsius;

  // Convert everything first to Celsius
  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = (value - 32) * (5 / 9);
      break;
    case "K":
      celsius = value - 273.15;
      break;
  }

  // Convert Celsius to target
  switch (to) {
    case "C":
      return celsius;
    case "F":
      return celsius * (9 / 5) + 32;
    case "K":
      return celsius + 273.15;
  }
}

// Handle conversion
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const value = parseFloat(tempInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  // Validation
  if (isNaN(value)) {
    errorMsg.textContent = "⚠️ Please enter a valid number.";
    resultBox.textContent = "";
    return;
  } else {
    errorMsg.textContent = "";
  }

  // Do conversion
  const converted = convertTemperature(value, from, to);
  resultBox.textContent = `${value}°${from} = ${converted.toFixed(2)}°${to}`;
});

// Handle reset
form.addEventListener("reset", function () {
  resultBox.textContent = "";
  errorMsg.textContent = "";
});

// Handle swap button
swapBtn.addEventListener("click", function () {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
});
