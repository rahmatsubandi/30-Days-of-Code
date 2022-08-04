/**
 * Return the largest value of any a & b < k in S (where a < b).
 * If the bitwise OR of k and k-1 is greater than n, return k-2, otherwise return k-1.
 *
 * @param n - 10 : Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
 * @param k - the number we want to find the max less than k: An integer.
 * @returns The largest integer that is less than k and is a power of 2.
 */

function getMaxLessThanK(n, k) {
  return (k | (k - 1)) > n ? k - 2 : k - 1;
}
