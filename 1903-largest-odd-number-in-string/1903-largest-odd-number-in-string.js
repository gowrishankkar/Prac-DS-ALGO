/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let i = num.length - 1
    while (i >= 0 && !(num.charCodeAt(i) % 2)) {
        i--
    }
    return num.slice(0, ++i)
};