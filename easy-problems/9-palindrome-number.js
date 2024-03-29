/**
Easy

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Coud you solve it without converting the integer to a string?

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Accepted
711,423
Submissions
1,567,718 
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (flipNumber(x) === x) {
        return true;
    } else {
        return false;
    }
};

var flipNumber = (num) => {
    let result = 0;
    while (num > 0) {
        result = result * 10;
        let digit = (num % 10);
        result = result + digit;
        num = Math.floor(num / 10);
    }
    return result;
}