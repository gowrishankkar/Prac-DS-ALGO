/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = (cost, i = cost.length, memo = new Map()) => {
    const isBaseCase = i <= 1;
    if (isBaseCase) return 0;

    if (memo.has(i)) return memo.get(i);

    const [ prev, prevPrev ] = [ (i - 1), (i - 2) ];
    const downOne = minCostClimbingStairs(cost, prev, memo) + cost[prev];        /* Time O(N) | Space O(N) */
    const downTwo = minCostClimbingStairs(cost, prevPrev, memo) + cost[prevPrev];/* Time O(N) | Space O(N) */

    memo.set(i, Math.min(downOne, downTwo));

    return memo.get(i);
}
