const assert = require('assert');
const lib = require('./functionslib.js');
const { 
  map,
  filter,
  reduce } = lib;

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

const testMap = function() {
  assert.deepEqual(map(increment,[3]),[4]);
  assert.deepEqual(map(increment,[]),[]);
  assert.deepEqual(map(increment,[1,3,8]),[2,4,9]);
  assert.deepEqual(map(increment,[-4,56,12,76]),[-3,57,13,77]);
  console.log("+------Test for map() pass!!------+"); 
}

const testFilter = function() {
  assert.deepEqual(filter(isEven,[4]),[4]);
  assert.deepEqual(filter(isEven,[]),[]);
  assert.deepEqual(filter(isEven,[3]),[]);
  assert.deepEqual(filter(isEven,[4,3,81,4]),[4,4]);
  assert.deepEqual(filter(isEven,[2,9,0,1,6,5]),[2,0,6]);
  console.log("+------Test for filter() pass!!------+"); 
}

const testReduce = function() {
  assert.deepEqual(reduce(greatestNumber,[5,3]),5);
  assert.deepEqual(reduce(greatestNumber,[5]),5);
  assert.deepEqual(reduce(greatestNumber,[2,1,5,7,8,3]),8);
  
  assert.deepEqual(reduce(sum,[2,1]),3);
  assert.deepEqual(reduce(sum,[1]),1);
  console.log("+------Test for reduce() pass!!------+"); 
}

testMap();
testFilter();
testReduce();
