/**
 * @param {number} n
 * @return {number}
 */
// memo = {0:1, 1:1}
// var climbStairs = function(n) {
//     if (n in memo) {
//         return memo[n];
//     }
//     numWays = climbStairs(n - 1) + climbStairs(n - 2);
//     memo[n] = numWays;
//     return numWays;
// };


var climbStairs = function(n) {
    let dp =  new Array(n + 1).fill(null);
    var test = (i) =>{
        if(i == 0) return 1;
        if( i < 0) return 0;
        if(dp[i]) return dp[i]
        return dp[i] = test(i - 1) + test(i - 2)
    }
    return test(n)
};