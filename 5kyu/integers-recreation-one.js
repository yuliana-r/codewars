/* eslint-disable no-use-before-define */
/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors
we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which
is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum
of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string.
The subarrays (or tuples or Pairs) will have two elements: first the number the squared
divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".
*/

function listSquared(m, n) {
  const res = [];

  for (let i = m; i <= n; i++) {
    const squaredSum = findDivisors(i).map((a) => a ** 2).reduce((a, b) => a + b, 0);
    if (Number.isInteger(Math.sqrt(squaredSum))) res.push([i, squaredSum]);
  }

  return res;
}

function findDivisors(a) {
  const d = [];

  for (let i = 1; i <= a; i++) {
    if (a % i === 0) d.push(i);
  }
  return d;
}
