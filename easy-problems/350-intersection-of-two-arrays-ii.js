/**
 * 350. Intersection of Two Arrays II
Easy

COMPLETED —— 2021-06-21 —— 28m 38s
Tag - Hash Set
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.


Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000


Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/**
 *
 * Time Complexity - O(N) - iterate through each num array O(Max(n,m))
 * Space Complexity - O(N) - Map grows as a function of size and unique values in num arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
     const map = new Map();
    for (let num of nums1) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }

    let intersect = [];

    for (let num of nums2) {
        if (map.has(num)) {
            intersect.push(num);
            if (map.get(num) == 1) map.delete(num);
            else map.set(num, map.get(num) - 1);
        }
    }
    return intersect;
};

/**
 * Time Complexity - O(N) - iterate through each num array O(Max(n,m))
 * Space Complexity - O(1) - no Map
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersectParamsSorted = function(nums1, nums2) {
    nums1.sort((a,b) => a-b); // don't count this towards Time Complexity
    nums2.sort((a,b) => a-b); // don't count this towards Time Complexity

    let intersect = [];
    let n = nums1.length, m = nums2.length;
    let i=0, j=0;

    while (i < n && j < m) {
        let a = nums1[i], b = nums2[j];
        if (a == b) {
            intersect.push(nums1[i]);
            i++; j++;
        }
        else if (a < b) {
            i++;
        } else {
            j++;
        }
    }
    return intersect;
};