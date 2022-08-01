/**
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 *
 ** Note:
 * 1. The constructor function is called with the number of sides as an argument.
 * 2. The constructor function creates an array of sides.
 * 3. The perimeter function returns the sum of the array.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}
