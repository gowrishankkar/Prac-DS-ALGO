/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
     
    for(let i = 0; i<nums.length-1 ; i = i+2){
        let intArr = []
        for(let j = 0 ; j<nums[i] ; j++){
            arr.push(nums[i+1])
        }
    }
    return arr;    

};