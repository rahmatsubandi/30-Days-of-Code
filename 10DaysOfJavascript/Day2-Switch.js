/**
 * If the first letter of the string is in the array of vowels, return "A", if it's in the array of
 * consonants, return "B", if it's in the array of consonants, return "C", if it's in the array of
 * consonants, return "D", otherwise return an empty string.
 * @param s - a string to test
 * @returns A string with the first letter of the string.
 */

function getLetter(s) {
  let aList = ["a", "e", "i", "o", "u"];
  let bList = ["b", "c", "d", "f", "g"];
  let cList = ["h", "j", "k", "l", "m"];
  let dList = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  switch (true) {
    case aList.indexOf(s[0]) !== -1:
      return "A";
    case bList.indexOf(s[0]) !== -1:
      return "B";
    case cList.indexOf(s[0]) !== -1:
      return "C";
    case dList.indexOf(s[0]) !== -1:
      return "D";
    default:
      return "";
  }
}
