/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let k = 0
    for (let a of arr) {
        if (a % 2) {
            k++
            if (k == 3)
                return true
        } else
            k = 0  
    }             
    return false
};