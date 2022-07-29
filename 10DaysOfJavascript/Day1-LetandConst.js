/**
 * The readLine() function reads a line of text from standard input and returns it as a string.
 * The Math.PI constant is a mathematical constant π with a value of 3.141592653589793.
 * The area of a circle is calculated by multiplying π by the square of the radius.
 * The perimeter of a circle is calculated by multiplying π by the diameter of the circle.
 * The console.log() function writes the value of the area and perimeter variables to standard output.
 */
function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  let r = readLine();
  const PI = Math.PI;

  // Print the area of the circle:
  let area = PI * r * r;
  console.log(area);

  // Print the perimeter of the circle:
  let perimeter = 2 * PI * r;
  console.log(perimeter);
}
