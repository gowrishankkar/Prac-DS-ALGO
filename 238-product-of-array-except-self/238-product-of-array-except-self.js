/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     let A = nums
//     const prefix = [], N = A.length;
//     prefix[0] = A[0];
//     for (let i = 1; i < N; i++) {
//         prefix[i] = prefix[i - 1] * A[i];
//     }
//     const postfix = [];
//     postfix[N - 1] = A[N - 1];
//     for (let i = N - 2; i >= 0; i--) {
//         postfix[i] = postfix[i + 1] * A[i];
//     }

//     // console.log(postfix, 'prefix', prefix)
//     let result = []
//     for (let i = 0; i < N; i++) {
//         let leftValue = prefix[i - 1] ? prefix[i - 1] : 1
//         let rightValue = postfix[i + 1] ? postfix[i + 1] : 1
//         result[i] = leftValue * rightValue
//     }
//     console.log('result', result)
//     return result;
    
     if(!nums || !nums.length) {
        return nums;
    }
    const result = [1];
    for(let i = 0; i < nums.length -1; i++) {
        const val = result[result.length -1] * nums[i];
        result.push(val);
    }
    let val = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        result[i] = val * result[i];
        val = nums[i] * val;
    }
    return result;
    
    
};