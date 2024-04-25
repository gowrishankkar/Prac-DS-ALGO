/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
    const lengthesForCharacter = new Array(51).fill(0)
    for (let char of [...s].map(c => c.charCodeAt(0) - 72)) {
        lengthesForCharacter[char] = Math.max(...lengthesForCharacter.slice(char - k, char + k + 1)) + 1;
    }
    return Math.max(...lengthesForCharacter);
};
