/**
 * 58. Length of Last Word
Easy

COMPLETED —— 2021-06-25 —— 8m 43s
Tag - String

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.



Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0


Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let words = s.split(" ");
    if (words.length === 0) return 0;
    let lastWord = null;
    for (let i = words.length-1; i >= 0; i--) {
        if (words[i] !== "") {
            lastWord = words[i];
            break;
        }
    }
    return lastWord ? lastWord.length : 0;
};