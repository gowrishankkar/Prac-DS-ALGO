/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = (n, index = 0, memo = Array(n + 1).fill(0)) => {
    const isBaseCase1 = (n < index);
    if (isBaseCase1) return 0;

    const isBaseCase2 = (index === n);
    if (isBaseCase2) return 1;

    const hasSeen = (memo[index] !== 0);
    if (hasSeen) return memo[index];

    const [ next, nextNext ] = [ (index + 1), (index + 2) ];
    const left = climbStairs(n, next, memo);     /* Time O(N) | Space O(N) */
    const right = climbStairs(n, nextNext, memo);/* Time O(N) | Space O(N) */

    memo[index] = (left + right);                /*           | Space O(N) */
    return memo[index];
};
