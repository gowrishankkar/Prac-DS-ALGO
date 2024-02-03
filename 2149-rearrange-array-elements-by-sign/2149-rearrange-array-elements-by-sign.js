/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(A) {
    
  let n = A.length;

  // Define an array for storing the answer separately.
  let ans = new Array(n).fill(0);

  // Positive elements start from 0 and negative from 1.
  let posIndex = 0, negIndex = 1;
  for (let i = 0; i < n; i++) {

    // Fill negative elements in odd indices and increment by 2.
    if (A[i] < 0) {
      ans[negIndex] = A[i];
      negIndex += 2;
    }

    // Fill positive elements in even indices and increment by 2.
    else {
      ans[posIndex] = A[i];
      posIndex += 2;
    }
  }

  return ans;
};