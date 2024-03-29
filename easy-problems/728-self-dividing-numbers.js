/**
Easy

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
 */

 /**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let selfDivNumArray = makeArray(left, right);
    for (let i = 0; i < selfDivNumArray.length; i++) {
        if (containsZero(selfDivNumArray[i]) || !isSelfDividing(selfDivNumArray[i])) {
            selfDivNumArray.splice(i, 1);
            i--;
        }
    }
    return selfDivNumArray;
};

function containsZero(number) {
    let stringNumber = number.toString();
    for (let digit of stringNumber) {
        if (digit == '0') {
            return true;
        } 
    }
    return false;
}
    
function isSelfDividing(number) {
    let digitList = createDigitList(number);
    // digitList.forEach( digit => {
    //    if (number % digit) != 0) {
    //        return false;
    //    }
    // });
    for (let i = 0; i < digitList.length; i++) {
        if (number % digitList[i] != 0) {
            return false;
        }
    }
    return true;
}

function makeArray(left, right) {
    let array = [];
    for (let i = left; i <= right; i++) {
        array.push(i);
    }
    return array;
}

function createDigitList(number) {
    let digitList = [];
    while (number != 0) {
        let digit = number % 10;
        number = Math.floor(number / 10);
        
        digitList.push(digit);
    }
    return digitList;
}