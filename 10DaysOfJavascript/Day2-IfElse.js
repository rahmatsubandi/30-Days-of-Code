/**
 * The function getGrade() takes in a score as an argument.
 * The function checks if the score is greater than 25 and less than or equal to 30.
 * If the score is greater than 25, return "A", else if the score is greater than 20, return "B", else
 * if the score is greater than 15, return "C", else if the score is greater than 10, return "D", else
 * if the score is greater than 5, return "E", else if the score is greater than 0, return "F".
 * @param score - an integer between 0 and 30
 * @returns The grade of the student.
 */
function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) return "A";
  if (score > 20 && score <= 25) return "B";
  if (score > 15 && score <= 20) return "C";
  if (score > 10 && score <= 15) return "D";
  if (score > 5 && score <= 10) return "E";
  if (score >= 0 && score <= 5) return "F";
}
