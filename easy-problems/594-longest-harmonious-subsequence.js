/**
 * 594. Longest Harmonious Subsequence
Easy

FAILED —— 2021-06-22 —— 42m 56s
Tag - Hash Set

We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.


Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Example 2:

Input: nums = [1,2,3,4]
Output: 2
Example 3:

Input: nums = [1,1,1,1]
Output: 0


Constraints:

1 <= nums.length <= 2 * 104
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
   if (nums.length <= 1) return 0;
  let map = new Map();

  // populate map with value -> count
  for (let n of nums) {
      map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
  }

  if (map.size <= 1) return 0;

  let lhs = 0;
  nums.forEach((n) => {
      if (map.has(n-1)) lhs = Math.max(map.get(n-1) + map.get(n), lhs);
      if (map.has(n+1)) lhs = Math.max(map.get(n+1) + map.get(n), lhs);
  });

  return lhs;
};

findLHS([1,3,2,2,5,2,3,7]);
