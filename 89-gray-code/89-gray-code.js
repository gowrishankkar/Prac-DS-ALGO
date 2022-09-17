/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
      const count = Math.pow(2, n);
    const res = [], i = 0;
    for(let i = 0; i < count; i++){
        res[i] = i ^ (i >> 1);
    }
    return res;
};