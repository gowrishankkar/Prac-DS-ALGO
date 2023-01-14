/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

//     let [ left, right ] = [ 0, 0 ];

//     while (right < nums.length) {
//         const canSwap = (nums[right] !== 0)
//         if (canSwap) {
//             [nums[left], nums[right]] = [nums[right], nums[left]];
//             left++;
//         }

//         right++;
//     }
    
//      let start = 0, end = 0
//      while(end < nums.length){
//        if(nums[end]==0){
//            end++
//        }
//        else{
//            let temp = nums[start]
//            nums[start] = nums[end]
//            nums[end] = temp
//            start++
//            end++
//        }
//    }
    
    var pointer =0, temp;
    for(var i=0;i<nums.length;i++) {
        if(nums[i] !== 0) {
            temp = nums[pointer];
            nums[pointer] = nums[i];
            nums[i] = temp;
            pointer++;
        }
    }
};
