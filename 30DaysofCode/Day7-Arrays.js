/**
 * The function takes in a number, n, and an array of n numbers, arr, and returns the array in reverse
 * order.
 * @param n - The number of elements in the array.
 * @param arr - The array of numbers.
 * @returns {Array} - The array in reverse order.
 * 
 ** Note:
 * 1. Reads the first line of input and converts it to an integer.
 * 2. Reads the second line of input and splits it into an array of strings.
 * 3. Converts each string in the array to an integer.
 * 4. Reverses the array.
 * 5. Joins the array into a string and prints it.
 */

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  console.log(arr.reverse().join(' '));
}
