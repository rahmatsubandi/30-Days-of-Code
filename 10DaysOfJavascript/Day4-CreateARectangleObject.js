/**
 * Complete the Rectangle function
 * The function Rectangle takes two arguments, a and b, and returns an object with four properties:
 * length, width, perimeter, and area.
 * @param a - length of rectangle
 * @param b - width
 *
 ** Note:
 * 1. The function getPermiter() is a helper function that calculates the permiter of a rectangle.
 * 2. The function getArea() is a helper function that calculates the area of a rectangle.
 * 3. The Rectangle() constructor function creates a new object and sets the length and width properties.
 * 4. The constructor function also sets the perimeter and area properties.
 * 5. The constructor function returns the new object.
 */

function Rectangle(a, b) {
  function getPermiter(a, b) {
    return 2 * (a + b);
  }

  function getArea(a, b) {
    return a * b;
  }

  this.length = a;
  this.width = b;
  this.perimeter = getPermiter(a, b); // or this.perimeter = 2 * (a + b);
  this.area = getArea(a, b); // or this.area = a * b;
}
