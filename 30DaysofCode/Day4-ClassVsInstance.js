/**
 * The Person constructor function takes an initialAge parameter, which is used to set the age property
 * of the object. If the initialAge parameter is less than 0, the age property is set to 0 and a
 * message is logged to the console. The amIOld method logs a message to the console based on the age
 * property. The yearPasses method increments the age property by 1.
 * @param initialAge - the initial age of the person
 * @returns {Person} - the person object
 * @constructor - the constructor is function
 *
 ** Other Notes: **
 * 1. The constructor function is called Person.
 * 2. The constructor function takes an argument, initialAge.
 * 3. The constructor function creates a new object and assigns it to the variable this.
 * 4. The constructor function checks if initialAge is less than 0.
 * 5. If initialAge is less than 0, the constructor function sets the object’s age property to 0.
 * 6. If initialAge is greater than or equal to 0, the constructor function sets the object’s age property to initialAge.
 * 7. The constructor function creates a new function called amIOld that prints out a message depending on the object’s age property.
 * 8. The constructor function creates a new function called yearPasses that increments the object’s age property by 1.
 */

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  } else {
    this.age = initialAge;
  }
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    this.age += 1;
  };
}
