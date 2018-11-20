const map = function(functionRef, dataSet) {
  let resultSet = [];
  
  for (element of dataSet) { 
    resultSet.push(functionRef(element));
  }

  return resultSet;
}

const filter = function(dataSet,functionRef) {
  return [];
}

const reduce = function(dataSet,functionRef) {
  return ;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;

