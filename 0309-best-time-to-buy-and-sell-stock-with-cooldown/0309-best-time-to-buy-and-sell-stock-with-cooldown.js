/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = (prices) => {
    let [ sold, held, reset ] = [ (-Infinity), (-Infinity), 0 ];

    [ sold, reset ] = search(prices, sold, held, reset);/* Time O(N) */

    return Math.max(sold, reset);
}

var search = (prices, sold, held, reset) => {
    for (const price of prices) {/* Time O(N) */
        const preSold = sold;

        sold = (held + price);
        held = Math.max(held, (reset - price));
        reset = Math.max(reset, preSold);
    }

    return [ sold, reset ];
}