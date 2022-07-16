/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morses = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let res = [];
  let map = {};

  for (let i = 0; i < words.length; i++) {
    let temp = "";
    for (let j = 0; j < words[i].length; j++) {
      let index = words[i].charCodeAt([j]) - 97;
      temp += morses[index];
    }
    res.push(temp);
  }

  for (let i = 0; i < res.length; i++) {
    if (!map[res[i]]) {
      map[res[i]] = res[i];
    }
  }

  return Object.keys(map).length;
};