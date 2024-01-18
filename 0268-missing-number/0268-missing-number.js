/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//   let xor1 = 0;
//   let xor2 = 0;
//   let N = nums.length;
//   for (let i = 0; i < N; i++) {
//     xor2 = xor2 ^ nums[i]; // XOR of array elements
//     xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
//   }
//   xor1 = xor1 ^ N; // XOR up to [1...N]

//   return xor1 ^ xor2; // the missing number
// };


var missingNumber = function(a) {
 const summation = (a.length * (a.length + 1)) / 2;
  let s2 = 0;
  for (let i = 0; i < a.length; i++) {
    s2 += a[i];
  }
  return summation - s2;
};



// var missingNumber = function(a) {
//     for (let i = 0; i <= a.length; i++) {
//         if(!a.includes(i)) return i;
//     }

// };


// var missingNumber = function (nums) {
//     let sum = nums.reduce((acc, cur) => acc + cur);
//     let trueSum = (nums.length * (nums.length + 1)) / 2;
//     return trueSum - sum;
// };
