/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let ConcatWord1 = word1.join('')
     let ConcatWord2 = word2.join('')
     console.log(ConcatWord1, ConcatWord2)
    return ConcatWord1 === ConcatWord2
};