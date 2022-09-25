/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
        let min = Math.min(...nums), max = Math.max(...nums), x;
    
    for(i = 1; i <= max; i++){
        if(min % i == 0 && max % i == 0) x = i;
    }
     return x;
};