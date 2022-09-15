/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let result = 0, negCountIsOdd = false, minAbsVal = Infinity
    for (const row of matrix.values()) {
        for (const val of row.values()) {
            const absVal = Math.abs(val)
            minAbsVal = Math.min(minAbsVal, absVal)
            result += absVal
            
            if (val < 0) {
                negCountIsOdd = !negCountIsOdd
            }
        }
    }  
    if (negCountIsOdd) {
        result -= 2 * minAbsVal
    }
    return result
};