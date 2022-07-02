/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    // let result = [];
    // currentSum = 0;
    // for(let i = 0; i<nums.length; i++){
    //     currentSum += nums[i];
    //     result.push(currentSum);
    // }
    // return result;
    
    // let prefixSumArr = [arr[0]];
    // for (let i = 1; i < arr.length; i++) {
    //     prefixSumArr[i] = prefixSumArr[i - 1] + arr[i]
    // }
    // console.log('prefixSumArr', prefixSumArr)
//     let sum = 0
//     for (let i = 0; i <= arr.length; i++) {
//         if(i%2 !=0){
//              console.log('i', i)
//             for (let j = 0; j <= arr.length; j++){
//                 console.log('j', j)
//             }
        
//         }
        
//     }
     if (arr.length === 1) return arr[0];
    
    const prefixSum = new Array(arr.length);
    
    prefixSum[0] = arr[0];
    
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    
    if (arr.length % 2 !== 0) {
        sum += prefixSum[prefixSum.length - 1]
    }
    
    sum += prefixSum[prefixSum.length - 1];
    
    for (let k = 3; k < arr.length; k += 2) {
        sum += prefixSum[k - 1];
        for (let i = k; i < arr.length; i++) {
            sum += prefixSum[i];
            sum -= prefixSum[i - k];
        }
    }
    return sum;
};