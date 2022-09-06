/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
       let cols = matrix[0].length
    for(let i = 0; i < matrix.length; i++) {
    
        if(target >= matrix[i][0] && target <= matrix[i][cols - 1]) {
             for(let col = 0; col <= cols/2; col++) {
            if(matrix[i][col] == target || matrix[i][cols - col] == target) return true
        }
        }
    }
    
    return false
};