/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
//     let startIndex = Math.min(cost[0], cost[1])
//     let n =cost.length;
//     console.log('startIndex', startIndex, cost)
//     for(let i = 0; i< cost.length;i++){
        
//     }
     for (let i = 2; i < cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1]);
    }
    return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
};