/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let l = 0, h = Math.max(...nums);
    while(l <= h){
        let mid = Math.floor((l+h)/2);
        if(sumD(nums, mid) <= threshold) h = mid - 1;
        else l = mid + 1;
    }
    return l;
    
};

const sumD = (arr, d) =>{
    let sum = 0;
    for(let ele of arr){
        sum += Math.ceil(ele/d)
    }
    return sum;
}