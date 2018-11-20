const map = function(functionRef, dataSet) {
  let resultSet = [];
  
  for(element of dataSet) { 
    resultSet.push(functionRef(element));
  }

  return resultSet;
}

const filter = function(functionRef, dataSet) {
  let result;
  let resultSet = [];

  for(element of dataSet) {
    result = functionRef(element);
    if(result) {
      resultSet.push(element);
    }
  }
  return resultSet;
}

const reduce = function(functionRef, dataSet, initialValue) {
  let result;

  !initialValue || dataSet.unshift(initialValue);

  if(dataSet.length == 1) {
    return functionRef(dataSet[0]);
  }

  if(dataSet.length > 1) {
    for(let counter = 0; counter < dataSet.length-1; counter++) {
      result = functionRef(dataSet[counter],dataSet[counter+1]);
      dataSet[counter+1] = result;
    }
  }
  return result;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;

