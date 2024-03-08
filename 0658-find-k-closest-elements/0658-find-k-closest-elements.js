/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    arr = arr.map((val) => [Math.abs(x - val), val]);
    arr.sort((a, b) => {
        if(a[0] == b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    return arr.slice(0, k).map((a) => a[1]).sort((a, b) => a - b);
};