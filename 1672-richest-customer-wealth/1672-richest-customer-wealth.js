/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     let min = 0;
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let len = accounts[i].length;
        for (let j = 0; j < len; j++) {
            max += accounts[i][j]
        }
        if (max > min) {
            min = max;
            max = 0
        } else {
            max = 0;
        }
    }
    return min;
};