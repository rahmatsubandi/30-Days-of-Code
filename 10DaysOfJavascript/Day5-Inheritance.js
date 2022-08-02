/**
 * Write code that adds an 'area' method to the Rectangle class' prototype
 *
 ** Note:
 * It extends the Rectangle class with a new method called area().
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

/**
 * Create a Square class that inherits from Rectangle and implement its class constructor
 *
 ** Note:
 * 1. The Square class extends the Rectangle class.
 * 2. The Square class has a constructor that calls the constructor of the Rectangle class.
 * 3. The Square class has a constructor that takes one parameter, a number, and calls the constructor of the Rectangle class with that number.
 * 4. The Square class has a constructor that calls the constructor of the Rectangle class with the number it was given.
 */
class Square extends Rectangle {
  constructor(a) {
    super(a, a);
  }
}
