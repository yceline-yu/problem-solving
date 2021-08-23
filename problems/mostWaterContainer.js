/** mostWaterContainer
 * 
 * Given an array of non-negative integers,
 * where each integer is a part of a coordinate (i, n)
 * Return the max area of water that can be contained from the "graph"
 * 
 * [1,1] => 1
 * [4,3,2,1,4] => 16
 * [1,2,1] => 2
 * [] => 0
 * [1,8,6,2,5,4,8,3,7] => 49
 * 
 */
// have area variable
// have totalLength value
// area is (height x length) or 0
// height ideally being the two highest points
//    max height is the shorter of the two points
//    height = ints[x] > ints[y] ? ints[y] : ints[x];
// length is the space between the two heights
//    how to calculate the space?
//    subtract index? 8 - 1 = 7
// have a pointer for x (horz)
// have pointer for y (vert)
// while x < ints.length
//  currHeight = ints[y]
//  currLength = y - x
//  currArea = currLength * currHeight
//  if (currArea > area) area = currArea
//  increase y
//  if (y === totalLength) increase x, reset y value to x value
function mostWaterContainer(ints) {
  let largestArea = 0;
  let totalLength = ints.length;
  let x = 0;
  let y = 0;

  while (x < totalLength) {
    // console.log("x,y", x,y);
    currHeight = ints[x] > ints[y] ? ints[y] : ints[x];
    // console.log("height", currHeight)
    currLength = y - x;
    // console.log("length", currLength);
    currArea = currHeight * currLength;
    // console.log("curARea", currArea);

    if (currArea > largestArea) {
      largestArea = currArea;
    }

    y += 1;

    if (y >= totalLength) {
      x += 1;
      y = x;
    }
  }
  return largestArea;
}