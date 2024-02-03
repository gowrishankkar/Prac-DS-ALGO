/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = 0;
    let sell = 1;

    while(sell < prices.length) {
        if(prices[buy] > prices[sell]) {
            buy = sell;
        } else {
            max = Math.max(max, prices[sell] - prices[buy])
        }
        sell ++;
    }
    return max;
};