/**
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 * @param objects - an array of objects with integer properties 'x' and 'y'
 * @returns The number of objects in the array that have the same value for both x and y.
 *
 **Note:
 * 1. The getCount function takes an array of objects as an argument.
 * 2. The function returns the number of objects that have the same value for the x and y properties.
 * 3. The filter method is used to create a new array containing only the objects that have the same value for the x and y properties.
 * 4. The length property is used to get the length of the new array.
 * 5. The function returns the length of the new array.
 */

function getCount(objects) {
  return objects.filter((obj) => obj.x == obj.y).length;
}
