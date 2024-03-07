/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let r = [];
    let s = [];
    let n =  nums.length * 2;
    let arr= [...nums, ...nums]
    for(let i = n - 1; i >= 0; i--) {
        if(!s.length) r.push(-1);
        else if(s.length && s[s.length - 1] > arr[i]) r.push(s[s.length - 1])
        else if(s.length && s[s.length - 1] <= arr[i]){
            while(s.length && s[s.length - 1] <= arr[i]) s.pop();
            if(!s.length) r.push(-1);
            else r.push(s[s.length - 1]);
        }
        s.push(arr[i])
    }
    return r.splice(nums.length, nums.length).reverse();

};

// var nextGreaterElements = function(nums) {
//     let res = new Array(nums.length).fill(-1);
//     let stack = [];
//     for (let i = 0; i < nums.length * 2; i++) {
//         let j = i % nums.length;
//         while (stack.length > 0 && nums[stack[stack.length-1]] < nums[j]) {
//             // current element is NGN for popped element
//             res[stack.pop()] = nums[j];
//         }
//         stack.push(j);
//     }
//     return res;
//     // T.C: O(N)
//     // S.C: O(N)
// };