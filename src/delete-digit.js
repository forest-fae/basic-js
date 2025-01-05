const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToString = n.toString();
  let max = 0;
  for (let i = 0; i < numToString.length; i++) {
    const newNum = Number.parseInt(numToString.slice(0, i) + numToString.slice(i + 1), 10);
    max = Math.max(max, newNum);
  }
  return max;
}
module.exports = {
  deleteDigit
};
