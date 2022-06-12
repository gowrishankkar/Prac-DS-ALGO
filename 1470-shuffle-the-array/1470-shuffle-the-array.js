/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    console.log('nums', nums);
    console.log('n', n);
    let leftPointer = 0 ;
    let rightPointer = nums.length/2
        console.log('leftPointer', leftPointer);
        console.log('rightPointer', rightPointer);
    let pushLeft = true;
    let result = []
    while(leftPointer < rightPointer && leftPointer < nums.length/2 ||rightPointer < nums.length){
        if(pushLeft){
            result.push(nums[leftPointer])
            leftPointer++;
            pushLeft = false;
        } else {
             result.push(nums[rightPointer])
            rightPointer++;
            pushLeft = true;
        }
        
    }
    console.log('result', result)
    return result;
};