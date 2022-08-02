/**
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 *
 ** Note:
 * 1. The `sides` function takes two parameters: `literals` and `expressions`.
 * 2. The `literals` parameter is an array of strings.
 * 3. The `expressions` parameter is an array of two numbers.
 * 4. The `sides` function returns an array of two numbers.
 * 5. The `sides` function calculates the two possible values for the length of the side of a right triangle.
 * 6. The `sides` function sorts the two possible values for the length of the side of a right triangle.
 */
function sides(literals, ...expressions) {
  const [a, p] = expressions;

  const root = Math.sqrt(p * p - 16 * a);
  const s1 = (p + root) / 4;
  const s2 = (p - root) / 4;

  return [s2, s1].sort();
}
