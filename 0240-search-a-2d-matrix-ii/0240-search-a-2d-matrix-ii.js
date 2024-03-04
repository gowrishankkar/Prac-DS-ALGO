/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//      let n = matrix.length;
//     let m = matrix[0].length;
//     let row = 0;
//     let col = m - 1;

//     // Traverse the matrix from (0, m-1):
//     while (row < n && col >= 0) {
//         if (matrix[row][col] === target) return true;
//         else if (matrix[row][col] < target) row++;
//         else col--;
//     }
//     return false;
// };


var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }
        if (matrix[row][col] < target) {
            row ++;
        } else {
            col --;
        }
    }
    return false;
};