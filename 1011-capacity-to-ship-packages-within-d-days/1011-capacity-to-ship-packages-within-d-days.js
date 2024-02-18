/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let min = Math.max(...weights);
    let max = weights.reduce((a, b) => a + b);
    while (min < max) {
        const mid = Math.floor((min + max) / 2);
        let needed = 1;
        let sum = 0;
        for (let w of weights) {
            if (sum + w > mid) {
                needed++;
                sum = 0;
            }
            sum += w;
        }
        if (needed > days) {
            min = mid + 1;
        } else {
             max = mid;
        }
    }
    return min;
};