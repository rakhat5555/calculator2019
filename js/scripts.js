function add(number1, number2) {
  return number1 + number2;
};

function sub(number1, number2) {
  return number1 - number2;
};

function multi(number1, number2) {
  return number1 * number2;
};

function divi(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divi(number1, number2);
alert(result);
