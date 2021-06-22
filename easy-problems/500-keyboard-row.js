/**
 * 500. Keyboard Row
Easy

COMPLETED —— 2021-06-22 —— 21m 23s
Tag - Hash Set

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".



Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]


Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase).
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  let firstRow = "qwertyuiop".split("");
  let secondRow = "asdfghjkl".split("");;
  let thirdRow = "zxcvbnm".split("");

  let possibleWords = [];
  words.forEach((word) => {
    if (canTypeWithRow(word, firstRow) ||
        canTypeWithRow(word, secondRow) ||
        canTypeWithRow(word, thirdRow)) {
            possibleWords.push(word);
      }
});

  return possibleWords;
};

const canTypeWithRow = (word, row) => {
  word = word.toLowerCase();
  let isTypeAble = true;
  for (let i = 0; i < word.length; i++) {
      if (!row.includes(word[i])) {
          return false;
      }
  }
  return isTypeAble;
}

findWords(["Hello","Alaska","Dad","Peace"]);