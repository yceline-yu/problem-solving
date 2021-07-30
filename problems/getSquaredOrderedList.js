
/** getSquaredOrderedList
 * Given an ordered list of integers, return:
 * - new ordered list of each element squared
 * 
 * 
 * Req: Do not use the built-in sort methods of the language. 
 * 
 * Test Cases:
 * [0, 1, 2] => [0, 1, 4]
 * [4, 5] => [16, 25]
 * [-2, 1, 2] => [1, 4, 4]
 * [] => []
 */

function getSquaredOrderedList(ints) {
  if (ints.length === 0) return [];

  let squaredList = getSquaredList(ints);

  return getOrderedList(squaredList);
}

/** getSquaredList
 * Given a list of integers, return a new list of squared elements
 * 
 * [1, 2] => [1,4]
 * [-2, 1] => [4, 1]
 */

function getSquaredList(ints) {
  if (ints.length === 0) return [];
  return ints.map(val => val ** 2);
}


/** getOrderedList
 * Given list of integers, returns a new ordered list
 * 
 * [4, 1] => [1, 4]
 * [1, 2, 3] => [1, 2, 3]
 */

function getOrderedList(ints) {
  if (ints.length <= 1) return ints;

  const mid = Math.floor(ints.length / 2);
  const left = getOrderedList(ints.slice(0,mid));
  const right = getOrderedList(ints.slice(mid));

  return sort(left, right);
}

/** sort
 * Given two sorted lists, return new sorted list
 * 
 * [2,3], [3,4] => [2,3,3,4]
 * [4,6], [3,5] => [3,4,5,6]
 */

function sort(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i += 1
    } else {
      results.push(arr2[j]);
      j += 1
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i += 1
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j += 1
  }

  return results;

}

module.exports = { 
  getOrderedList, 
  getSquaredList, 
  getSquaredOrderedList, 
  sort
};