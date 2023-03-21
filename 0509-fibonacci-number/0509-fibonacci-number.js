/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n, map = {}) {
//     if (n === 0) return n;
//     if (n === 1) return n;
//     if(map[n]) return map[n]
//     let ans = fib(n-1) + fib(n-2)
//     map[n] = ans;
//     return ans
    
// };

 var fib = function (n,memo={}) {
    if(n<1) return 0
    if (n<3)return 1    
    if(n in memo) return memo[n]
    memo[n]=fib(n-1,memo)+fib(n-2,memo)
    return memo[n]
    
};