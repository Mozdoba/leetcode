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

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let letterArr = new Array(26).fill(0);
    let subStringLength = 0;
    let highScore = 0;

    [...s].forEach(letter => {
        if (isNewLetter(letter, letterArr)) {
            subStringLength++;
            addLetterToArray(letter, letterArr);
        } else {
            highScore = subStringLength;
            subStringLength = 0;
            letterArr = resetArr();
        }
    });
    return (highScore <= subStringLength) ? subStringLength : highScore;
};

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const string = "abcdefghijklmnopqrstuvwxyz";

function resetArr(arr) {
    arr = new Array(26).fill(0);
    return arr;
}

function isNewLetter(letter, arr) {
    let index = alphabet.indexOf(letter);
    return (arr[index] === 0) ? true : false;
}

function addLetterToArray(letter, array) {
    let index = alphabet.indexOf(letter);
    array[index]++;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let letterArr = getLetterCount(s);
    console.log(letterArr);
    return countNumberOfChars(letterArr);
};

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getLetterCount(s) {
    let letterArr = new Array(26).fill(0);
    [...s].forEach(letter => {
        let index = alphabet.indexOf(letter);
        letterArr[index]++;
    });
    return letterArr;
}

function printLetters(s) {
    [...s].forEach(letter => {
        console.log(letter);
    });
}

function countNumberOfChars(arr) {
    let count = 0;
    arr.forEach(letterCount => {
        if (letterCount > 0) {
            count++;
        }
    });
    return count;
}