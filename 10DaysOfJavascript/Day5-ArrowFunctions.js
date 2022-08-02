/**
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 *
 ** Note:
 * 1. The function takes in an array of numbers.
 * 2. It returns a new array where each number is modified based on its value.
 * 3. If the number is even, it’s multiplied by 2.
 * 4. If the number is odd, it’s multiplied by 3.
 */
function modifyArray(nums) {
  return nums.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
}
