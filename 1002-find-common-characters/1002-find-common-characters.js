/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const result = [];
  const firstWordCharacters = words[0].split("");

  for (let i = 0; i < firstWordCharacters.length; i++) {
    if (words.every((x) => x.includes(firstWordCharacters[i]))) {
      result.push(firstWordCharacters[i]);
      words = words.map((x) => x.replace(firstWordCharacters[i], ""));
    }
  }

  return result;
};