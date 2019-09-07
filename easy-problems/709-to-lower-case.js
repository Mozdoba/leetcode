/**
Easy

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.


Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"
 */

 /**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let strLowerCase = "";
    for (let character of str) {
        if (isUpper(character)) {
            strLowerCase += toLower(character)
        } else {
            strLowerCase += character
        }
    }
    return strLowerCase
};

function isUpper(character) {
    if (character.charCodeAt(0) >= 65
     && character.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}

function toLower(character) {
    let upperCharCode = character.charCodeAt(0);
    let lowerCharCode = upperCharCode + 32;
    return String.fromCharCode(lowerCharCode);
}