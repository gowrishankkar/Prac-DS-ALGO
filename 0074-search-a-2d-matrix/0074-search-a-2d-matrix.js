/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     let m = matrix;
//     let num = target
//      var low = 0, high = m.length * m[0].length - 1;
//         var mid;
//         while (low <= high) {
//             mid = Math.floor((high - low) / 2 + low);
//             var row = Math.floor(mid / m[0].length);
//             var col = mid % m[0].length;
//             if (m[row][col] > num)
//                 high = mid - 1;
//             else if (m[row][col] < num)
//                 low = mid + 1;
//             else return 1;
//         }
//         return 0;
// };

var searchMatrix = function(matrix, target) {
    let m = 0;
    let n = matrix[0].length - 1;

    while (m <= matrix.length - 1 && n >= 0) {
        const curNode = matrix[m][n];
        
        if (curNode === target) return true;
        
        if (curNode > target) {
            n--;
        } else {
            m++;
        }
    }

    return false;
};