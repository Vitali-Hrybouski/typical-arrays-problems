exports.min = function min(array) {
  if (Array.isArray(array) == true) {
    if (array.length == 0) return 0;
    else return array.sort((a, b) => (a - b)).shift();
  }
  else return 0;
}

exports.max = function max(array) {
  if (Array.isArray(array) == true) {
    if (array.length == 0) return 0;
    else return array.sort((a, b) => (a - b)).pop();
  }
  else return 0;
}

exports.avg = function avg(array) {
  if (Array.isArray(array) == true) {
    if (array.length == 0) {
      console.log(array);
      return 0;
    }
    else {
      let sum = 0;
      array.forEach(element => {
        sum += element;
      });
      let result = sum / array.length;
      return result;
    }
  }
  else return 0;
}

