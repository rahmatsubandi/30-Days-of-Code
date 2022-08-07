/**
 * It converts the number to binary, splits it into an array, then reduces the array to a single number, which is the largest consecutive 1's in the binary number.
 * @param {number} n
 * @returns {number}
 * @description This function takes a number and returns the sum of all the digits in the number.
 *
 ** Note:
 * 1. The first line of the JavaScript code is reading the input from the standard input.
 * 2. The second line of the JavaScript code is converting the input to an integer.
 * 3. The third line of the JavaScript code is converting the input to a binary number.
 * 4. The fourth line of the JavaScript code is converting the input to a string.
 * 5. The fifth line of the JavaScript code is splitting the string into an array.
 * 6. The sixth line of the JavaScript code is reducing the array to a single value.
 * 7. The seventh line of the JavaScript code is converting the single value to an integer.
 * 8. The eighth line of the JavaScript code is comparing the integer to the result.
 * 9. The ninth line of the JavaScript code is returning the result.
 * 10. The tenth line of the JavaScript code is returning the result.
 * 11. The eleventh line of the JavaScript code is printing the result to the standard output.
 */

function main() {
  const n = parseInt(readLine(), 10);
  let result = 0;

  const temp = n
    .toString(2)
    .split("")
    .reduce((target, num) => {
      let value =
        Number(num) > 0
          ? Number(target) + Number(num)
          : ((result = target > result ? target : result), 0);
      return value;
    }, 0);

  console.log(result - temp > 0 ? result : temp);
}
