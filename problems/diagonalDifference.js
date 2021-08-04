/** diagonalDifference
 * Given a square matrix, calculate the absolute difference
 * between the sums of its diagonals
 * 
 * [[1,2,3],
 * [4,5,6],
 * [9,8,9]]
 * => 2
 * 
 * [[1,2],
 * [3,4]]
 * => 0
 * 
 * make sum for the left diagonal
 * make sum for the right diagonal
 * return difference
 * 
 * track beginning and end index
 * loop and add arr[i][i] to sum left diagonal
 * add arr[i][length - 1 - i] to right diagonal
 * 
 * return difference
 */

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let endIndx = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][endIndx - i];
  }

  return Math.abs(leftSum - rightSum);
}