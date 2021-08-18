/**
 * Given a square matrix of positive integers,
 * your task is to sort the numbers in each of its diagonals parallel 
 * to the secondary diagonal.
 * Each diagonal should contain the same set of numbers as before, 
 * but sorted in ascending order from the bottom-left to top-right.
 * a = [[1, 3, 9, 4],
 *      [9, 5, 7, 7],
 *      [3, 6, 9, 7],
 *      [1, 2, 2, 2]]
 * 
 * => * [[1, 9, 9, 7],
 *       [3, 5, 6, 9],
 *       [3, 4, 7, 7],
 *       [1, 2, 2, 2]]
 * 
 * a = [[10, 1],
 *      [7, 5]]
 * 
 * => * [[10, 7],
 *       [1, 5]]
 */

function diagonalSort(matrix) {
  let rows = matrix.length - 1;
  let cols = matrix[0].length;

  function sort(i,j) {
    i ++;
    j ++;

    while ( i <= rows && j <= cols) {
      while (i > 0 && j > 0 && matrix[i][j] < matrix[i - 1][j - 1]) {
        [matrix[i][j], matrix[i - 1][j - 1]] = [matrix[i - 1][j - 1], matrix[i][j]];
        i--;
        j--;
      }
      i++;
      j++;
    }
  }

  for (let i = 0; i <= rows; i++){
    sort(i,0);
  }

  for (let i = 1; i <= cols; i++){
    sort(0,i);
  }
  return matrix;
}