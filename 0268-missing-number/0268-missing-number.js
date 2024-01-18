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


// var missingNumber = function(a) {
// const N = a.length;
//  const summation = (N * (N + 1)) / 2;

//   // Summation of all array elements:
//   let s2 = 0;
//   for (let i = 0; i < N - 1; i++) {
//     s2 += a[i];
//   }

//   const missingNum = summation - s2;
//   return missingNum;
// };



var missingNumber = function(a) {
    let missingNum;
  for (let i = 0; i <= a.length; i++) {
    if(!a.includes(i)) return i;
  }

};

