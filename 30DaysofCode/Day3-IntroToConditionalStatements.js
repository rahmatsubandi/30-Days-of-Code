/**
 * 1. The first line of the code is reading the input from the user.
 * 2. The second line of the code is checking if the number is odd or even.
 * 3. The third line of the code is checking if the number is greater than 20.
 * 4. The fourth line of the code is checking if the number is greater than or equal to 6.
 * 5. The fifth line of the code is checking if the number is greater than or equal to 2.
 * 6. The sixth line of the code is printing the result.
 */

function main() {
  const N = parseInt(readLine(), 10);
  if (N % 2 != 0) {
    console.log("Weird");
  } else if (N > 20) {
    console.log("Not Weird");
  } else if (N >= 6) {
    console.log("Weird");
  } else if (N >= 2) {
    console.log("Not Weird");
  }
}
