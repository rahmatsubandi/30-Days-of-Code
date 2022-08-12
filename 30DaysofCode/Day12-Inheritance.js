/**
 * 1. The Student class extends the Person class.
 * 2. The Student constructor takes the same parameters as the Person constructor.
 * 3. The Student constructor calls the Person constructor to initialize the firstName, lastName, and id properties.
 * 4. The Student constructor creates a new property, scores, and assigns it to an array.
 * 5. The Student constructor calls the calculate method to calculate the average score and assign it to the average property.
 * 6. The calculate method calculates the average score and returns the letter grade.
 * 7. The Student constructor returns the new Student object.
 */

class Student extends Person {
  /**
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here

  /**
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  /**
   * The above code is creating a class called Student that inherits from the Person class. It is also
   * creating a method called calculate that will return a letter grade based on the average of the
   * scores array.
   */
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);

    this.scores = scores;
  }

  calculate() {
    const average =
      this.scores.reduce((target, score) => {
        return target + score;
      }) / this.scores.length;

    const range =
      average < 70
        ? Math.ceil((100 - average) / 15)
        : Math.floor((100 - average - 1) / 10);
    let letter = "";

    switch (range) {
      case -1:
      case 0:
        letter = "O";
        break;

      case 1:
        letter = "E";
        break;

      case 2:
        letter = "A";
        break;

      case 3:
        letter = "P";
        break;

      case 4:
        letter = "D";
        break;

      default:
        letter = "T";
        break;
    }

    return letter;
  }
}
