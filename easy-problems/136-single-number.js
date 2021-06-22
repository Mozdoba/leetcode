/**
 * 136. Single Number
Easy

FAILED —— 2021-06-21 —— 26m 26s
Tag - Hash Table

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1


Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */

const numberOfSquares = (n) => {
  let numberOfSquares = 0;
  while (n > 0) {
      let num = n % 10;
      n = Math.floor(n / 10);
      numberOfSquares += Math.pow(num, 2);
  }
  return numberOfSquares;
}

/**
* @param {number} n
* @return {boolean}
*/
var isHappy = function(n) {
  if (n === 1) return true;
  const map = new Map();
  do {
    n = numberOfSquares(n);
    if (n === 1) return true;
    if (map.has(n)) return false;
    map.set(n,n);
  } while(true);
};


const testA = () => {
  isHappy(2);
}

testA();