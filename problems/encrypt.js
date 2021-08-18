// the => abc
// string, keyString

//"hi there" => {h: a}
// {h: a, i: b, t:c, b: d} - key
// ("hi", key) => "ab"
// 

// make obj for key string, have stringkey will be obj key, value will be the alphabet in order
// string = "ABC..."
// if the stringKey already exist in obj then increment to the next letter in alphabetstring.
//if not included in alphabet string retain value
// " ": " "
// ".": "."
// loop through the given message, 
// newStr += obj[str[i]];
// if key not inside object then change it to upper case
// get the value from that and lowercase it
// add it to the newString
// return the new string

function encrypt(message, key) {
  //"Hih,"
  let keyToCipher = getKeyToValueObject(key); //{H:A, I:B, ,:","}

  let newMessage = "";

  for (let char of message) {
    if (!(char in keyToCipher)){
      let upperChar = char.toUpperCase();
      newMessage += keyToCipher[upperChar].toLowerCase();
    } else {
      newMessage += keyToCipher[char];
    }

    // if (!(ALPHABET.includes(char))) {
    //   obj[char] = char;
    // }
  }

  return newMessage; //"Aba,"

}

function getKeyToValueObject(key) {
  const ALPHABET = "ABCDEFGHIJKLMNOP..."
  let obj = {};
  let alphaIdx = 0;
  let upperKey = key.toUpperCase();
  //"HI,"
  for (let char of upperKey) {
    if (char in obj) {
      continue
    }

    if (!(char in obj) && ALPHABET.includes(char)) {
      let value = ALPHABET[alphaIdx];
      obj[char] = value;
      alphaIdx += 1;
    }

  }
  return obj;
}