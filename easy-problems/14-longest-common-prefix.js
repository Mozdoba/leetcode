/**14. Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

Accepted
569,635
Submissions
1,661,436
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = "";
    if (strs.length === 0) {
        return commonPrefix;
    }
    let smallestStrIndex = getIndexOfSmallestStr(strs);
    let smallestString = strs[smallestStrIndex];
    for (let end = 0; end < strs[smallestStrIndex].length; end++) {
        let currentLetter = strs[smallestStrIndex][end];
        for (let i = 0; i < strs.length; i++) {
            let string = strs[i];
            if (string[end] !== currentLetter) {
                return commonPrefix;
            }
        }
        commonPrefix = smallestString.substring(0, end + 1);
        console.log(commonPrefix);
    }
    return commonPrefix;
};

const getIndexOfSmallestStr = (strs) => {
    let smallestStr = strs[0];
    for (let str of strs) {
        if (str.length < smallestStr.length) {
            smallestStr = str
        }
    }
    return strs.indexOf(smallestStr);
}