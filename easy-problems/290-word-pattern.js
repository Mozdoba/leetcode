/**
290. Word Pattern
Easy

FAILED —— 2021-06-21 —— 1h 5m 28s
Tag - Hash Set

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", s = "dog dog dog dog"
Output: false


Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
Accepted
261,643
Submissions
677,485
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  let words = s.split(" ");
  if (words.length != pattern.length) return false;
  let patternToWords = new Map();
  let WordsToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!patternToWords.has(pattern.charAt(i)) && !WordsToPattern.has(words[i])) {
      patternToWords.set(pattern.charAt(i), words[i]);
      WordsToPattern.set(words[i], pattern.charAt(i));
    }
    if (patternToWords.get(pattern.charAt(i)) != words[i] && WordsToPattern.get(words[i]) != pattern.charAt(i)) return false;
  }

  return true;
};

 var wordPattern = function(pattern, s) {
  const words = s.split(" ");
  const map = new Map();

  if (words.length != pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
      // contains pattern, doesn't match to word
      if (map.has(pattern[i]) && map.get(pattern[i]) != words[i]) return false;
      // doesn't contain pattern, but already has word. Meaning that the word pairs with more than one pattern
      else if (!map.has(pattern[i]) && Array.from(map.values()).includes(words[i])) return false;

      map.set(pattern[i], words[i]);
  }

  return true;
};