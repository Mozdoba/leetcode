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