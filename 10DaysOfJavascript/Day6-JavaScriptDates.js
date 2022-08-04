/**
 * It takes a date string and returns the day of the week.
 * @param dateString - A date string in the format dd-mm-yyyy
 * @returns The day of the week in string format.
 * The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
 */

function getDayName(dateString) {
  let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Write your code here
  return dayName[new Date(dateString).getDay()];
}
