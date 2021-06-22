/**
 * 387. First Unique Character in a String
Easy

COMPLETED —— 2021-06-21 —— 21m 39s
Tag - Hash Set

Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  if (!s) return -1;
  if (s.length == 1) return 0;

  let map = new Map();
  map.set(s[0], 1);

  for (let i = 1; i < s.length; i++) {
      // if map has value, incremement count
      if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
      else map.set(s[i], 1);
  }

  let index = 0;
  // loop through entries to find first letter with count #1
  for (let [letter, count] of map.entries()) {
      while (s[index] != letter) {
          index++;
      }
      if (count === 1) {
          return index;
      }
      index++;
  }

  // if didn't find count === 1, no unique characters
  return -1
};