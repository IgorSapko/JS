const findLongestWord = function (string) {
  let arrWordsString = string.split(" ");

  let numberWordsStringArr = arrWordsString.length;
  let longestWordLength = 0;
  let j;

  for (let i = 0; i < numberWordsStringArr; i += 1) {
    if (longestWordLength < arrWordsString[i].length) {
      longestWordLength = arrWordsString[i].length;
      j = i;
    }
  }
  return arrWordsString[j];
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
