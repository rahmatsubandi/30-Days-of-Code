/**
 * The function takes in a string of contacts and queries, splits the string into an array, creates a
 * phonebook object, and then loops through the array to find the queries.
 * @param input - The input is a string that contains the number of contacts, followed by the contacts
 * themselves, followed by the number of queries, followed by the queries themselves.
 *
 ** Note:
 * 1. The first line of the input is the number of entries in the phone book.
 * 2. The next n lines contain the name and phone number of the n entries in the phone book.
 * 3. The next line contains the number of queries.
 * 4. The next q lines contain the name of the q queries.
 */

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  var phoneBook = [];

  for (i = 1; i <= parseInt(input[0]); i++) {
    var contactArray = input[i].split(" ");
    phoneBook[contactArray[0]] = contactArray[1];
  }

  for (i = parseInt(input[0]) + 1; i < input.length; i++) {
    if (phoneBook[input[i]]) {
      console.log(input[i] + "=" + phoneBook[input[i]]);
    } else {
      console.log("Not found");
    }
  }
}
