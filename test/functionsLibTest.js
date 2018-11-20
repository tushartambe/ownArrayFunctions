const assert = require('assert');
const lib = require('../src/functionslib.js');
const testFunctionsLib = require('../src/functionsToRunTests.js');

const { 
  map,
  filter,
  reduce } = lib;

const {
  increment,
  isEven,
  greatestNumber,
  sum } = testFunctionsLib;

describe('map', function () {
  describe('increment', function () {
    it('should imcrement value by 1 for single element', function () {
      assert.deepEqual(map(increment,[3]),[4]);
    });

    it('should imcrement value by 1 for multiple elements', function () {
      assert.deepEqual(map(increment,[1,3,8]),[2,4,9]);
    });

    it('should imcrement value by 1 for negative elements', function () {
      assert.deepEqual(map(increment,[-4,-9,12,76]),[-3,-8,13,77]);
    });

    it('should return empty [] for input of empty []', function () {
      assert.deepEqual(map(increment,[]),[]);
    });
  });
});

describe('filter', function () {
  describe('isEven', function () {
    it('should return even element in [] for only one element', function () {
      assert.deepEqual(filter(isEven,[4]),[4]);
    });

    it('should return empty [] for no even element in given []', function () {
      assert.deepEqual(filter(isEven,[3]),[]);
    });

    it('should return even elements in [] for multiple elements', function () {
      assert.deepEqual(filter(isEven,[4,3,81,4]),[4,4]);
      assert.deepEqual(filter(isEven,[2,9,0,1,6,5]),[2,0,6]);
    });

    it('should return [] for input []', function () {
      assert.deepEqual(filter(isEven,[]),[]);
    });
  });
});

describe('reduce', function () {
  describe('greatestNumber', function () {
    it('should return same element for only one element', function () {
      assert.deepEqual(reduce(greatestNumber,[5]),5);
    });

    it('should return greatest number for multiple elements', function () {
      assert.deepEqual(reduce(greatestNumber,[5,3]),5);
      assert.deepEqual(reduce(greatestNumber,[2,1,5,7,8,3]),8);
    });
    
    it('should return initial value for input empty [] and initial value', function () {
      assert.deepEqual(reduce(greatestNumber,[],5),5);
    });

    it('should return greatest of initial value and array with only one element', function () {
      assert.deepEqual(reduce(greatestNumber,[8],5),8);
    });
  
    it('should return greatest of initial value and array with multiple elements', function () {
      assert.deepEqual(reduce(greatestNumber,[2,4,6],0),6);
      assert.deepEqual(reduce(greatestNumber,[3,4,5],9),9);
    });
  });

  describe('sum', function () {
    it('should return same element for only one element', function () {
      assert.deepEqual(reduce(sum,[1]),1);
    });

    it('should return sum of all numbers for multiple elements', function () {
      assert.deepEqual(reduce(sum,[2,1]),3);
    });
    
    it('should return initial value for input empty [] and initial value', function () {
      assert.deepEqual(reduce(sum,[],5),5);
    });
    
    it('should return sum of initial value and array with multiple elements', function () {
    assert.deepEqual(reduce(sum,[0,2],6),8);
    });
  
  });
});
