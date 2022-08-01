/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let max = 0, 
      left = 0, 
      right = height.length - 1;
  let term, thisArea, width;
  while (left < right) {
    width = right - left;
    if (height[left] < height[right]) {
      thisArea = height[left] * width;
      left++;    
    } else {
      thisArea = height[right] * width;
      right--;
    }
    max = max > thisArea ? max : thisArea;
  }
  return max;
};