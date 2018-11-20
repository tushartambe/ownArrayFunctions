const assert = require('assert');
const lib = require('./functionslib.js');
const { map } = lib;

const increment = function(element) {
  return element + 1;
}
const testMap = function() {
  assert.deepEqual(map(increment,[3]),[4]);
  assert.deepEqual(map(increment,[]),[]);
  assert.deepEqual(map(increment,[1,3,8]),[2,4,9]);
  assert.deepEqual(map(increment,[-4,56,12,76]),[-3,57,13,77]);
  console.log("+------Test for map() pass!!------+"); 
}

testMap();

