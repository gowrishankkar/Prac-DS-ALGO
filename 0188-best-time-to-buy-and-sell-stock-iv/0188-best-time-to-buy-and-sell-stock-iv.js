/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(k, prices) {
//     const n = prices.length;

//     // Creating a 3D array to store dynamic programming values
//     const dp = new Array(n).fill(null).map(() =>
//         new Array(2).fill(null).map(() =>
//             new Array(k + 1).fill(-1)
//         )
//     );

//     function getAns(ind, buy, cap) {
//         if (ind === n || cap === 0) return 0; // Base case

//         if (dp[ind][buy][cap] !== -1)
//             return dp[ind][buy][cap];

//         let profit;

//         if (buy === 0) { // We can buy the stock
//             profit = Math.max(
//                 0 + getAns(ind + 1, 0, cap, dp),
//                 -prices[ind] + getAns(ind + 1, 1, cap, dp)
//             );
//         }

//         if (buy === 1) { // We can sell the stock
//             profit = Math.max(
//                 0 + getAns(ind + 1, 1, cap, dp),
//                 prices[ind] + getAns(ind + 1, 0, cap - 1, dp)
//             );
//         }

//         dp[ind][buy][cap] = profit;
//         return profit;
//     }

//     // Call the recursive function to compute the result
//     return getAns(0, 0, k);
// };


var maxProfit = function(k, prices) {
      const n = prices.length;

    // Creating a 3D array to store dynamic programming values
    const dp = new Array(n + 1).fill(null).map(() =>
        new Array(2).fill(null).map(() =>
            new Array(k+1).fill(0)
        )
    );

    // Loop through the array to calculate the maximum profit
    for (let ind = n - 1; ind >= 0; ind--) {
        for (let buy = 0; buy <= 1; buy++) {
            for (let cap = 1; cap <= k; cap++) {

                if (buy === 0) { // We can buy the stock
                    dp[ind][buy][cap] = Math.max(
                        0 + dp[ind + 1][0][cap],
                        -prices[ind] + dp[ind + 1][1][cap]
                    );
                }

                if (buy === 1) { // We can sell the stock
                    dp[ind][buy][cap] = Math.max(
                        0 + dp[ind + 1][1][cap],
                        prices[ind] + dp[ind + 1][0][cap - 1]
                    );
                }
            }
        }
    }

    return dp[0][0][k];
}