/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     const arrLength = height.length;
//         let lheight = 0, rheight = 0, water = 0;
//         let leftB = [];
//         let rightB = [];

//         for(let i = 0; i < arrLength; i++) {
//             if(lheight > height[i]) {
//                 leftB.push(lheight);
//             } else {
//                 lheight = height[i];
//                 leftB.push(0);
//             }

//             if(rheight > height[arrLength-i-1]) {
//                 rightB.unshift(rheight);
//             } else {
//                 rheight = height[arrLength-i-1];
//                 rightB.unshift(0);
//             }
//         }
//         for(let i = 0; i < arrLength; i++) {
//             if(leftB[i] && rightB[i]) {
//                 water  += Math.min(leftB[i], rightB[i]) - height[i];
//             }
//         }
//         return water;
    
// };


function trap(height) {
  if (height == null || height.length === 0) return 0;

  let l = 0;
  let r = height.length - 1;

  let lMax = 0;
  let rMax = 0;

  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    if (height[l] < lMax) {
      res += lMax - height[l];
    }

    rMax = Math.max(rMax, height[r]);
    if (height[r] < rMax) {
      res += rMax - height[r];
    }

    height[l] < height[r] ? l++ : r--;
  }

  return res;
}