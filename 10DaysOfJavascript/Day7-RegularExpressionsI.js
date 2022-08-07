function regexVar() {
  /**
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   *
   ** Note:
   * It creates a regular expression that matches a string that starts with a vowel and ends with the same vowel.
   */

  let re = /^(a|e|i|o|u).*\1$/;

  /**
   * Do not remove the return statement
   */
  return re;
}
