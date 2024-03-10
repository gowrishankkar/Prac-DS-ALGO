/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = s => {
    let newString = (s + s).substring(1, s.length * 2 - 1)
    
    return newString.indexOf(s) !== -1
}