/**
 * 1. The second line of the JavaScript code is a function called processData.
 * 2. The third line of the JavaScript code is a variable called input.
 * 3. The fourth line of the JavaScript code is a string that is assigned to the input variable.
 * 4. The fifth line of the JavaScript code is a for loop that iterates through the input string.
 * 5. The sixth line of the JavaScript code is a variable called splitWord.
 * 6. The seventh line of the JavaScript code is a for loop that iterates through the splitWord string.
 * 7. The eighth line of the JavaScript code is a conditional statement that checks if the current index of the splitWord string is even.
 * 8. The ninth line of the JavaScript code is a variable called even.
 * 9. The tenth line of the JavaScript code is a variable called odd.
 * 10. The eleventh line of the JavaScript code is a conditional statement that checks if the current index of the splitWord string is odd.
 * 11. The twelfth line of the JavaScript code is a string that is assigned to the even variable.
 * 12. The thirteenth line of the JavaScript code is a string that is assigned to the odd variable.
 */

function processData(input) {
  //Enter your code here
  input = input.split("\n");

  for (let i = 1; i < input.length; i++) {
    var splitWord = input[i].split("");

    var even = "";
    var odd = "";

    for (x = 0; x < splitWord.length; x++) {
      if (x % 2 == 0) {
        even = even + splitWord[x];
      } else {
        odd = odd + splitWord[x];
      }
    }
    console.log(even + " " + odd);
  }
}
