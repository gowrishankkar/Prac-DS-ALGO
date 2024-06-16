/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    var sum = 0, patch = 0, i = 0, num = nums[0];
    
    while(sum < n){
        if(!num || sum + 1 < num){
            patch++;
            sum += sum + 1;
        }else if(num){
            sum += num;
            num = nums[++i];
        }
    }
    
    return patch;
};