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
//  var myPow = (x, n) => {
//     if (n < 0) {
//         x = (1 / x);
//         n = (-n);
//     }

//     return getPow(x, n);/* Time O(N) */
// }

// var getPow = (x, n, pow = 1) => {
//     for (let i = 0; i < n; i++) {/* Time O(N) */
//         pow = pow * x;
//     }

//     return pow;
// }

