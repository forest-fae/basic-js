const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const arrToChange = [...arr]; 
  const instructions = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];

  for (let i = 0; i < arrToChange.length; i++) {
    const current = arrToChange[i];

  if(current === '--double-prev') {
    if (i - 1 >= 0 && arrToChange[i - 1] !== '--discard-next') {
      arrToChange.splice(i, 0, arrToChange[i - 1]);
      i++;
    }
  } else if (current === '--double-next') {
    if (i + 1 < arrToChange.length) {
      arrToChange.splice(i + 1, 0, arrToChange[i + 1]); 
    }
  }  else if (current === '--discard-prev') {
    if (i - 1 >= 0 && arrToChange[i - 1] !== '--discard-next') {
      arrToChange.splice(i - 1, 1); 
    }
  } else if (current === '--discard-next') {
    if (i + 1 < arrToChange.length) {
      arrToChange.splice(i + 1, 1); 
    }
  }
}
return arrToChange.filter(el => !instructions.includes(el));
}


module.exports = {
  transform
};
