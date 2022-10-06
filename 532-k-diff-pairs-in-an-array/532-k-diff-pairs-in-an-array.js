/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
   const map = new Map();
    for(let num of nums) {
        const val = map.has(num) ? map.get(num) : 0;
        map.set(num , val+1);
    }
    let count = 0;
    for(const [key, val] of map) {
        if(k !== 0 && map.has(key+k)) {
            count++;
        } else if(k === 0 && map.has(key+k)) {
            if(val > 1) {
                count++;
            }
        }
    }
    return count;
};