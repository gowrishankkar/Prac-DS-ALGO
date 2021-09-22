/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = Number((''+x).split('').reverse().join(''));
    if(result === x){
        return true;
    } else return false;
    console.log(result)
};