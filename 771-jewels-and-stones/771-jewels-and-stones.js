/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i in stones){
        // console.log('ele', stones[i])
        if(jewels.includes(stones[i])) count++;
    }
    return count
};