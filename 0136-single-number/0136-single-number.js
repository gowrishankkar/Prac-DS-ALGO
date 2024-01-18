/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
     let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
};