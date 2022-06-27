/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  var output = 0;

  for (let i = 0; i < words.length; i++) {
    var flag = 1; // consistent by default
    for (let j = 0; j < words[i].length; j++) {
      if (allowed.indexOf(words[i].charAt(j)) == -1) {
        flag = 0; // set to 0 if not consitent
        break;
      }
    }

    if (flag == 1) {
      output++;
    }
  }

  return output;
};