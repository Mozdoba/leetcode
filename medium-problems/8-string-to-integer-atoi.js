/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let firstNonWhiteSpaceIndex = getFirstNonWhiteSpaceIndex(str);
    let result;
    let lastDigitIndex;
    if (s[firstNonWhiteSpaceIndex] === 0) {
        return 0;
    } else if (s[firstNonWhiteSpaceIndex] === 1) {
        lastDigitIndex = getLastDigitIndex(str);
        result = str.substring(firstNonWhiteSpaceIndex + 1);
        return integerOrMAXOrMIN(parseInt(result));
    } else if (s[firstNonWhiteSpaceIndex] === 2) {
        lastDigitIndex = getLastDigitIndex(str);
        result = str.substring(firstNonWhiteSpaceIndex + 1);
        return integerOrMAXOrMIN(parseInt(-result));
    } else if (s[firstNonWhiteSpaceIndex] === 3) {
        lastDigitIndex = getLastDigitIndex(str);
        result = str.substring(firstNonWhiteSpaceIndex);
        return integerOrMAXOrMIN(parseInt(result));
    }
};

const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);

const getFirstNonWhiteSpaceIndex = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            return i;
        }
    }
    return 0;
}

const getLastDigitIndex = (str) => {
    let lastDigitIndex;
    for (let i = 0; i < str.length; i++) {
        if (!isNumeric(str[i])) {
            return i;
        }
    }
    return str.length;
}

const isNumeric = (str) => {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

const isPlusMinusOrInvalid = (char) => {
    if (char === "+") {
        return 1;
    } else if (char === "-") {
        return 2;
    } else if (isNumeric(char)) {
        return 3;
    } else {
        return 0;
    }
}

const integerOrMAXOrMIN = (integer) => {
    if (integer >= INT_MAX) {
        return INT_MAX;
    } else if (integer <= INT_MIN) {
        return INT_MIN;
    } else {
        return integer;
    }
}

