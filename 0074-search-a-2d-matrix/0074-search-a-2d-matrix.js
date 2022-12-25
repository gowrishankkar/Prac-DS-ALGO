/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix;
    let num = target
     var low = 0, high = m.length * m[0].length - 1;
        var mid;
        while (low <= high) {
            mid = Math.floor((high - low) / 2 + low);
            var row = Math.floor(mid / m[0].length);
            var col = mid % m[0].length;
            if (m[row][col] > num)
                high = mid - 1;
            else if (m[row][col] < num)
                low = mid + 1;
            else return 1;
        }
        return 0;
};