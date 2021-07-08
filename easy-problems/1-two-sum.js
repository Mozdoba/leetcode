/**
1. Two Sum

Easy
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */


/**
 * 2nd Implementation
 * COMPLETED - 4m 37s - 2020-07-07
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (nums.includes(complement) && nums.indexOf(complement) != i) return [i, nums.indexOf(complement)];
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * FAILED - 10m 53s - 2021-06-17
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumA = function(nums, target) {
  const map = new Map;
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i];
      }
      map.set(nums[i], i);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumB = function(nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (dict[complement] != undefined) {
          return [dict[complement], i];
      }
      dict[nums[i]] = i;
  }
};
