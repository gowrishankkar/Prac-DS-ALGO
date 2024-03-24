/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// var maxProfit = function(A, fee) {
//     let n = A.length;
//     let dp = new Array(n).fill(null).map(()=> new Array(2).fill(-1));
    
//     function dfs(i, buy){
//         if(i == n) return 0;
//         if(dp[i][buy] !== -1) return dp[i][buy];
//         let profit;
        
//         if(buy){
//             profit =  Math.max( -A[i] + dfs(i + 1, 0), dfs(i+1, 1));
//         }else{
//             profit =  Math.max( A[i] + dfs(i + 1, 1) - fee, dfs(i+1, 0));
//         }
//         return dp[i][buy] = profit;
//     }
    
//     return dfs(0, 1)
// };


var maxProfit = function(A, fee) {
    let n = A.length;
    let dp = new Array(n + 1).fill(null).map(()=> new Array(2).fill(-1));
    dp[n][0] = dp[n][1] = 0;
    for(let i = n - 1; i >= 0; i--){
        for(let buy = 0; buy < 2; buy++){
            let profit;
            if(buy == 0){
                profit =  Math.max( -A[i] + dp[i+1][1], dp[i+1][0]);
            }else{
                profit =  Math.max( A[i] + dp[i+1][0] - fee, dp[i+1][1]);
            }
            dp[i][buy] = profit;
        }
    }
    
   return dp[0][0];
};