/**
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 *
 * @param n - Integer
 * @returns The factorial of the number.
 *
 ** Note:
 * 1. The function factorial() accepts a number as an argument.
 * 2. If the number is less than 0, it returns 1.
 * 3. If the number is 1, it returns 1.
 * 4. Otherwise, it returns the number multiplied by the factorial of the number minus 1.
 */

function factorial(n) {
  // Write your code here
  if (n < 0) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
