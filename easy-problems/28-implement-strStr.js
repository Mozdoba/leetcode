/**
 * 28. Implement strStr()
Easy

FAILED —— 2021-06-25 —— 43m

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().



Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0


Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let l1 = haystack.length, l2 = needle.length;
    if (l1 < l2) { // needle is larger than haystack
        return -1;
    } else if (l2 == 0) { // needle is empty string
        return 0;
    }
    let threshold = l1 - l2;
    for (let i = 0; i <= threshold; i++) {
        let substring = haystack.substring(i,i+l2);
        if (substring === needle) {
            return i;
        }
    }
    return -1;
};

strStrA("hello", "ll");
