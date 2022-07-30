/**
 * The function takes a string as an argument, splits the string into an array, filters the array into
 * two arrays, one with vowels and one with consonants, and then logs each array to the console.
 * @param s - a string to split (in this case, the string "javascriptloops")
 */
function vowelsAndConsonants(s) {
  let vowelsList = ["a", "e", "i", "o", "u"];

  let word = s.split("");

  let vowels = word.filter((letter) => vowelsList.indexOf(letter) !== -1);
  let consonant = word.filter((letter) => vowelsList.indexOf(letter) === -1);

  vowels.map((vowel) => console.log(vowel));
  consonant.map((consonant) => console.log(consonant));
}
