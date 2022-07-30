function vowelsAndConsonants(s) {
  let vowelsList = ["a", "e", "i", "o", "u"];

  let word = s.split("");

  let vowels = word.filter((letter) => vowelsList.indexOf(letter) !== -1);
  let consonant = word.filter((letter) => vowelsList.indexOf(letter) === -1);

  vowels.map((vowel) => console.log(vowel));
  consonant.map((consonant) => console.log(consonant));
}
