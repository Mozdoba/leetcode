/**
Medium

4592

417

Favorite

Share
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
Accepted
691,938
Submissions
2,460,573
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === "") {
        return "";
    }
    if (isPalindrome(s)) {
        return s;
    }
    let index = 0;
    let palindrome;
    let longestPalindrome = s[0];
    while (index !== s.length) {
        let testString = s[index];
        let innerIncrementer = index + 1;
        if (innerIncrementer > s.length) {
            break;
        }
        while (innerIncrementer <= s.length) {
            if (isPalindrome(testString)) {
                palindrome = testString;
            }
            if (palindrome.length > longestPalindrome.length) {
                longestPalindrome = palindrome;
            }
            testString = s.slice(index, ++innerIncrementer);
            if (innerIncrementer > s.length) {
                break;
            }
        }
        index++;
    }
    return longestPalindrome;
};

const isPalindrome = s => {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start++] != s[end--]) {
            return false
        }
    }
    return true;
}

