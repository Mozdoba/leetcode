/**
 * 136. Single Number
Easy

1st Try - FAILED —— 2021-06-21 —— 26m 26s
2nd Try - COMPLETED –– 2021-07-07 8m 42s

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

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumberMath = function(nums) {
  let singles = [], sets = [];
  for (let num of nums) {
    if (!singles.includes(num)) singles.push(num);
    sets.push(num);
  }
  return (2 * singles.reduce((a,b) => a + b, 0)) - sets.reduce((a,b) => a + b, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberXOR = function(nums) {
    let answer = 0;
    for (let num of nums) {
      // a XOR 0 = a
      // a XOR a = 0
      answer = answer ^ num;
    }
    return answer
};

var singleNumberA = function(nums) {
  const map = new Map();
  for (const num of nums) {
      if (map.has(num)) map.set(num, map.get(num) + 1);
      else map.set(num, 1);
  }
  let answer = Array.from(map.entries()).map(([k,v]) => {
    if (v === 1) return k;
  }).filter(v => v !== undefined);
  return answer[0];
};

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

singleNumber([1, 1, 0, 0, 2])

const testA = () => {
  isHappy(2);
}

testA();