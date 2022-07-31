/**
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 * @param a - an integer.
 * @returns "YES"
 * @throws - throws is a function that throws an error.
 * @Error is a constructor function that creates an error object.
 *
 ** Notes: **
 * If a is greater than 0, return "YES". If a is equal to 0, throw an error with the message "Zero Error". If a is less than 0, throw an error with the message "Negative Error"
 */

function isPositive(a) {
  if (a > 0) return "YES";
  if (a === 0) throw Error("Zero Error");
  throw Error("Negative Error");
}
