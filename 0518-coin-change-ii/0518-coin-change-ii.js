/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// var change = function(amount, coins) {
//       const dp = Array.from({ length: coins.length}, () => Array(amount + 1).fill(-1));
    
//     // Call the recursive utility function to calculate the result
//     return countWaysToMakeChangeUtil(coins, coins.length - 1, amount, dp);
// };

// function countWaysToMakeChangeUtil(arr, ind, T, dp){
//     if(ind == 0){
//         return (T % arr[0] === 0) ? 1 : 0;
//     }
    
//     if(dp[ind][T] !== -1 ) return dp[ind][T];
    
//     let notTaken = countWaysToMakeChangeUtil(arr, ind - 1, T, dp);
    
//     let taken = 0;
//     if(arr[ind] <= T) taken = countWaysToMakeChangeUtil(arr, ind , T - arr[ind], dp);
    
//     return dp[ind][T] = taken + notTaken;
// }


var change = function(amount, coins) {
      const dp = Array.from({ length: coins.length}, () => Array(amount + 1).fill(0));
        for (let i = 0; i <= amount; i++) {
            if (i % coins[0] === 0)
                dp[0][i] = 1;
            // Else condition is automatically fulfilled,
            // as dp array is initialized to zero
        }

    
    for(let i = 1; i < coins.length ; i++){
        for(let t = 0; t <= amount; t++){
            const notTaken = dp[i-1][t];
            let taken = 0;
            if(coins[i]<= t){
                taken = dp[i][t - coins[i]];
            }
            dp[i][t] = taken + notTaken;
        }
    }
    
        // console.table(dp)
    return dp[coins.length - 1][amount]
};