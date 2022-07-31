/**
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 * @param s - a string to reverse.
 *
 ** Notes: **
 * It takes a string, splits it into an array, reverses the array, joins the array back into a string, and then prints the string.
 */

function reverseString(s) {
  try {
    let listOfStrings = s.split("");
    s = listOfStrings.reverse().join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
}
