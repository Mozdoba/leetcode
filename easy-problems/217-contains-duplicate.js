/**
217. Contains Duplicate
Easy

FAILED —— 2021-06-21 —— 26m 26s
Tag - Hash Set
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
Accepted
843,239
Submissions
1,465,942
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], nums[i]);
  }

  return false;
};

var containsDuplicate = function(nums) {
  let count = 0;
  let N = nums.length
  while (nums.length && count < N) {
      let num = nums[0];
      nums.splice(0, 1);
      if (nums.includes(num)) return true;
      count++;
  }
  return false;
};

containsDuplicate([2,14,18,22,22]);

