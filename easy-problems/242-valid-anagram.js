/**
 * 242. Valid Anagram
Easy

COMPLETED —— 2021-06-21 —— 14m 10s
Tag - Hash Set

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

Accepted
851,614
Submissions
1,435,580
 */

var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  const map = new Map();

  // iterate and store letter -> count from 's'
  for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      if (!map.has(letter)) map.set(letter, 1);
      else (map.set(letter, map.get(letter) + 1));
  }

  // iterate and remove letter -> count from map using 't'
  for (let i = 0; i < t.length; i++) {
      let letter = t[i];
      if (!map.has(letter)) return false;

      map.set(letter, map.get(letter) - 1);
      if (map.get(letter) === 0) map.delete(letter);
  }

  // anagrams should have no letters left over after deleting all
  return map.size === 0
};