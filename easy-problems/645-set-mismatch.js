/**
645. Set Mismatch
Easy


FAILED —— 2021-06-22 —— 27m 27s
Tag - Hash Set

You have a set of integers s, which originally contains all the numbers from 1 to n.
Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.


Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]


Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104
 */

/**
 * Time Complexity - O(N) - iterate through nums 2x, entries, but we have to sort.
 * Space Complexity - O(N) - constrained to the size of nums
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    const map = new Map();

    for (let num of nums) {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    }

    let duplicated = -1;
    for (let [num, count] of map.entries()) {
        if (count === 2) duplicated = num;
    }

    let deleted = -1;
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            deleted = i;
            break;
        }
    }
    return [duplicated, deleted];
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums1 = function(nums) {
  let map = new Map();
  for (let n of nums) {
      map.has(n) ? map.set(n, map.get(n)+1) : map.set(n, 1);
  }

  let duplicated = Array.from(map.entries()).map(([k,v]) => {
      if (v == 2) return k;
  }).filter((v) => v);

  let missing = nums[nums.length];
  for (let n of nums) {
      if (!map.has(n)) {
          missing = n;
          break;
      }
  }

  return [duplicated, missing];
};

findErrorNums([1,2,2,4]);