/**
 * 204. Count Primes
Easy
FAILED —— 2021-06-21 —— 37m 19s
Tag - Hash Table

Count the number of prime numbers less than a non-negative number, n.

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0


Constraints:

0 <= n <= 5 * 106
 */


/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
  const primes = Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      for (j = i+i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes.filter(p => p === true).length;
};

/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
  const primes = new Map();
  for (let i = 0; i < n+1; i++) {
    primes.set(i, true);
  }

  primes.set(0, false);
  primes.set(1, false);

  for (let p = 2; p * p <= n; p++) {
    if (primes.get(p)) {
      for (let i = p*p; i <= n; i += p) {
        primes.set(i, false);
      }
    }
  }
  return primes.size();
};

countPrimes(10);