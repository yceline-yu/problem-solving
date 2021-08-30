/** spiralMatrix
 * 
 * Given an 'm x n' matrix, 
 * return all elements of the matrix in spiral order
 * 
 * [[1,2,3], [4,5,6], [7,8,9]]
 * => [1,2,3,6,9,8,7,4,5]
 * 
 * [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * => [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * [[1,2],[3,4]]
 * => [1,2,4,3]
 */
// need two pointers, one for row, one for col
// normal til row ends, then col still same but row + 1
// when row reaches end again, reverse the cols idx