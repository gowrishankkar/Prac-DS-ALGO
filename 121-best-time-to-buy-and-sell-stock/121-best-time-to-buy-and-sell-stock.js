/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left = 0;
    let right = 1;
    let lowPrice = prices[0];
    for(let i = 1; i < prices.length ; i++){
        console.log(prices[left])
        console.log(prices[right])
         lowPrice = Math.min(prices[i], lowPrice);
        maxProfit = Math.max(maxProfit, prices[i] - lowPrice);
        // if(prices[left] < prices[right]){
        //     let profit = prices[right] - prices[left]
        //     maxProfit = Math.max(maxProfit, profit)
        // } else {
        //     left = right
        // }
    }
    return maxProfit;
    
};