/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxSeq = 0;
        console.log('set', set, [...set])
    for(let num of [...set]){ 
        console.log(num,set.has(num-1))
        if(!set.has(num-1)){
            currentLength = 0;
            while(set.has(num + currentLength)){
                currentLength++
            }
            maxSeq = Math.max(maxSeq, currentLength)
            
        }
    }
    
    return maxSeq
};