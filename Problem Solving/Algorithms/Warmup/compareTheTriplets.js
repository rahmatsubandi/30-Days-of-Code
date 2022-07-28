function compareTriplets(a, b) {
  // Write your code here
  let p1 = 0,
    p2 = 0,
    aliceScore = 0,
    bobScore = 0;
  while (p1 < a.length && p2 < b.length) {
    if (a[p1] > b[p2]) {
      aliceScore += 1;
      p1 += 1;
      p2 += 1;
    } else if (a[p1] < b[p2]) {
      bobScore += 1;
      p1 += 1;
      p2 += 1;
    } else {
      p1 += 1;
      p2 += 1;
    }
  }
  return [aliceScore, bobScore];
}
