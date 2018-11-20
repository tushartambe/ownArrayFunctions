const increment = function(element) {
  return element + 1;
}

const isEven = function(number) {
  return number % 2 == 0;
}

const greatestNumber = function(previousNumber,currentNumber) {
  currentNumber = currentNumber || previousNumber;
  return Math.max(previousNumber,currentNumber);
}

const sum  = function(firstNumber,secondNumber = 0) {
  return firstNumber + secondNumber;
}

exports.increment = increment;
exports.isEven = isEven;
exports.greatestNumber = greatestNumber;
exports.sum = sum;
