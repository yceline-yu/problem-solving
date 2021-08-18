
/** uniqueString
 * Given a string, implement an algorithm to check if it contains all unique characters, 
 * 
 * Restriction: No additional data structures 
 */

// loop through the string, keep track of characters in another string?
// add to seen string, if seen string includes character, return false
// else add new character to seen string
// if string length is alphabet length return false
// if character in string, return false

function uniqueString(str) {

  let seen = "";

  for (let char of str) {
    if (seen.includes(char)) {
      return false
    } else {
      seen += char;
    }
  }

  return true;

}