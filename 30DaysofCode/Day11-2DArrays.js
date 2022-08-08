/**
 * We're going to create a temporary array, then loop through the 2D array and push the sum of the
 * hourglass into the temporary array, then we're going to find the max value in the temporary array
 * and print it out.
 *
 ** Note:
 * 1. The first for loop is used to create a 2D array of 6 rows and 6 columns.
 * 2. The second for loop is used to create a temporary array that will hold the sum of each sub-matrix.
 * 3. The third for loop is used to create a sub-matrix of 3 rows and 3 columns.
 * 4. The fourth for loop is used to calculate the sum of each sub-matrix.
 * 5. The fifth for loop is used to calculate the maximum value of the temporary array.
 * 6. The final console.log() function is used to print the maximum value.
 *
 * @returns The maximum hourglass sum in the array.
 */

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const temp = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      temp.push(
        arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2]
      );
    }
  }

  let max = temp.reduce(function (previous, current) {
    return previous > current ? previous : current;
  });

  console.log(max);
}
