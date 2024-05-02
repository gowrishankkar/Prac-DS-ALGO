var findMaxK = function(nums) {
    let result = -1;
    const negatives = new Set();
    for(num of nums) {
        negatives.add(0 - num);
    }
    for(num of nums) {
        if (num > 0 && negatives.has(num) && num > result) {            
            result = num;            
        }
    }    
    return result;    
};