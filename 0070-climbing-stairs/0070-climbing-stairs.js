/**
 * @param {number} n
 * @return {number}
 */
memo = {0:1, 1:1}
var climbStairs = function(n) {
    if (n in memo) {
        return memo[n];
    }
    numWays = climbStairs(n - 1) + climbStairs(n - 2);
    memo[n] = numWays;
    return numWays;
};