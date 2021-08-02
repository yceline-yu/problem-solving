
// given an array of string words and a string of characters
// return the length of all the good words
// word = good if it can be formed from the chars in the string

// make an object that has a key of the characters and a value of the count
// counter for good word length
// loop array, make an object of the words and then compare the key/values
// loop through the word object and compare it to the character object
// if the word key/value matches or value is greater than then update length counter

// ["hi", "bye"], "heytherebuddy" => 3
// ["hs", "a"], "has" => 3
// ["hi"], "" => 0
// [""], "jss" => 0

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

function countCharacters(words, chars) {
  if (chars.length === 0) return 0;

  let charsToCount = getCharToCount(chars);
  console.log("charsObj", charsToCount);
  let goodWordsTotalLength = 0;

  for (let word of words) {
    let isGood = true;
    let wordCharsToCount = getCharToCount(word);
    console.log("wordObj", wordCharsToCount);

    for (let char in wordCharsToCount) {
      console.log("char", char);
      console.log("words count, chars count", wordCharsToCount[char], charsToCount[char]);
      if (!(char in charsToCount)) {
        isGood = false;
      }
      if (wordCharsToCount[char] > charsToCount[char]) {
        isGood = false;
      }
    }

    if (isGood) {
      goodWordsTotalLength += word.length;
    }

  }
  return goodWordsTotalLength;
}

function getCharToCount(str) {
  let obj = {}
  for (let char of str) {
    let count = obj[char] || 0;
    obj[char] = count + 1;
  }

  return obj;
}