/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
        if(n < 0) {
        n = -n;
        x = 1/x;
    }
    let ans = 1;
    let curr = x;
    for(let i = n; i ; i = Math.trunc(i/2)) {
        if(i % 2 === 1) {
            ans = ans * curr;
        }
        curr = curr * curr;
    }
    return ans;
};