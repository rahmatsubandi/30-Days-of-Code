/**
 * Return the second largest number in the array.
 * @param {Number[]} nums - An array of numbers.
 * @return {Number} The second largest number in the array.
 *
 ** Notes: **
 * If the max number is greater than 0, return the max number minus 1, otherwise return the max number.
 **/

function getSecondLargest(nums) {
  // Complete the function
  let maxNum = Math.max(...nums);
  return maxNum > 0 ? maxNum - 1 : maxNum;
}
