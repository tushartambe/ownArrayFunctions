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

const reduce = function(functionRef, dataSet) {
  return ;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;

