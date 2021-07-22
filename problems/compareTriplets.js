/** compareTriplets
 * 
 * Given two arrays of three integers (representing a person score), compare each index
 * the larger number gets one point, ties receive zero
 * 
 * Return an array of total points for each person.
 * 
 * a = [1,2,3]
 * b = [3,2,1]
 * => [1,1]
 */
// loop through both arrays. use the index to compare both,
// have two counters, one for each
// if a[i] > b[i] aCounter ++, if b > a b++, if a===b +0 to both
function compareTriplets(a, b) {
  let aCount = 0;
  let bCount = 0;
  let points = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aCount += 1;
    }
    if (b[i] > a[i]) {
      bCount += 1;
    }
    if (a[i] === b[i]) {
      continue;
    }
  }
  points.push(aCount);
  points.push(bCount);

  return points;
}