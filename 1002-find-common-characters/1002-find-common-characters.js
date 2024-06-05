/**
 * @param {string[]} words
 * @return {string[]}
 */
// var commonChars = function (words) {
//   const result = [];
//   const firstWordCharacters = words[0].split("");

//   for (let i = 0; i < firstWordCharacters.length; i++) {
//     if (words.every((x) => x.includes(firstWordCharacters[i]))) {
//       result.push(firstWordCharacters[i]);
//       words = words.map((x) => x.replace(firstWordCharacters[i], ""));
//     }
//   }

//   return result;
// };


var commonChars = function(words) {
    let result = [...words[0]];
    for(let i = 1; i < words.length; i++) {
      result = result.filter(c => {
        const l = words[i].length;
        words[i] = words[i].replace(c, '');
        return l > words[i].length;
      });
    }
    return result;
};