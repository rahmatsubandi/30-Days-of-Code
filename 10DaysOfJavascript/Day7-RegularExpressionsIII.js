function regexVar() {
  /**
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   *
   ** Note:
   * Creating a new regular expression object that matches all occurrences of one or more digits in a string.
   */

  let re = new RegExp("\\d+", "g");

  /**
   * Do not remove the return statement
   */
  return re;
}
