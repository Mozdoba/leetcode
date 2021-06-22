/**
 * 409. Longest Palindrome
Easy

FAILED —— 2021-06-21 —— 34m 20s
Tag - Hash Set

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2


Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
 */


/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  if (s.length === 1) return 1;

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
      else map.set(s[i], 1);
  }

  let pCount = 0;
  for (let [key, value] of map.entries()) {
      // count the even amount of letters
      pCount += Math.floor((value / 2)) * 2;

      // if the current count is even, and the count for the letter was odd, we can use it as a center
      if (pCount % 2 === 0 && value % 2 === 1) {
          pCount++;
      }
  }

  return pCount;
};