/**
3. Longest Substring Without Repeating Characters
Medium

6445

376

Favorite

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

/**This function is too slow and was not accepted.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let highScore = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (allUnique(s, i, j)) {
                highScore = (highScore > (j - i)) ? highScore : (j - i);
            }
        }
    }
    return highScore;
};
    
function allUnique(s, start, end) {
    let charSet = [];
    for (let i = start; i < end; i++) {
        let char = s.charAt(i);
        if (charSet.includes(char)) {
            return false;
        }
        charSet.push(char)
    }
    return true;
}