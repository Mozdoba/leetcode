/**
 * 20. Valid Parentheses
Easy

COMPLETED —— 2021-06-24 —— 28m 28s
Tag - String

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let arr = s.split("");
    let para = ["(", ")"];
    let block = ["[", "]"];
    let curly = ["{", "}"];
    let closer = [")","]","}"];
    for (let i = 0; i < arr.length; i++) {
        if (closer.includes(arr[i])) {
            // we know it is an closing parenthesis
            let p = stack.pop();

            // arr[i] should pair with the popped value
            if (para.includes(p)) {
                if (arr[i] != para[1]) return false;
            }
            else if (block.includes(p)) {
                if (arr[i] != block[1]) return false;
            }
            else if (curly.includes(p)) {
                if (arr[i] != curly[1]) return false;
            } else {
                return false;
            }
        } else {
            stack.push(arr[i]);
        }
    }
    return stack.length === 0
};

isValid("()");