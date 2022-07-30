/**
 * The function takes in three arguments, meal_cost, tip_percent, and tax_percent, and returns the
 * total cost of the meal rounded to the nearest integer.
 * @param meal_cost - the cost of the meal before tax and tip
 * @param tip_percent - the percentage of the meal cost that you want to tip
 * @param tax_percent - the percentage of tax that is added to the bill (20% would be 20)
 */

function solve(meal_cost, tip_percent, tax_percent) {
  const answers = Math.round(meal_cost + meal_cost * tip_percent / 100 + meal_cost * tax_percent /100);
  console.log(answers);
}
