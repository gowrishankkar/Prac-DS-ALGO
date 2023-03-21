/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, map = {}) {
    if (n === 0) return n;
    if (n === 1) return n;
    if(map[n]) return map[n]
    let ans = fib(n-1) + fib(n-2)
    map[n] = ans;
    return ans
    
};