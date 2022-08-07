function regexVar() {
  /**
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   *
   ** Note:
   * 1. The first line of code defines a regular expression.
   * 2. The second line of code uses the regular expression to match a string.
   * 3. The third line of code uses the regular expression to replace a string.
   */

  let re = /^([MDE])[rs]s?\.\w*$/;

  /**
   * Do not remove the return statement
   */
  return re;
}
