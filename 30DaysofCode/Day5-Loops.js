/**
 * The function main() takes in a number, n, and prints out the multiplication table for that number.
 * @param n - the number to multiply by 1-10
 *
 ** Note:
 * 1. The first line of the JavaScript code is reading a line from the standard input.
 * 2. The second line is parsing the line read from the standard input as an integer.
 * 3. The third line is creating a for loop that will iterate 10 times.
 * 4. The fourth line is printing the result of multiplying the number read from the standard input by the current iteration number.
 */

function main() {
  const n = parseInt(readLine(), 10);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
