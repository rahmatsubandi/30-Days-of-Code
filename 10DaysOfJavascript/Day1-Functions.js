/**
 * If the number is 1, return 1. Otherwise, multiply the number by the factorial of the number minus 1
 * @param n - The number to calculate the factorial of.
 * @returns The factorial of the number passed in.
 * @note
 * 1. The function `factorial` takes a number as an argument.
 * 2. If `n` is equal to 1, then the function returns `n`.
 * 3. Otherwise, the function returns the product of `n` and the factorial of `n` minus 1.
 */

function factorial(n) {
  if (n === 1) {
    return n;
  }

  var r = 1;
  for (var i = n; i >= 1; i--) {
    r *= i;
  }
  return r;
}
