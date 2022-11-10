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


// function trap(height) {
//     if(height.length === 0 ) return 0;
//     let A = height;
//     let n = height.length;
//     let left = 0
//     let right = n-1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let ans = 0;
//     while(left<right){
//         leftMax = Math.max(leftMax , A[left])
//         if(leftMax > A[left]){
//             ans += leftMax - A[left]
//         }
//         rightMax = Math.max(rightMax , A[right])
//         if(rightMax > A[right]){
//             ans += rightMax - A[right]
//         }
        
//         A[left] > A[right] ? right-- : left++
        
//     }
//         return ans
// }



function trap(height){
//      if(height.length === 0 ) return 0;
//     let A = height;
//     let n = A.length;
//         let leftMax = A[0];
//         for (let i = 1; i < n; i++) {
//             leftMax[i] = Math.max(leftMax[i - 1], A[i])

//         }
//         let rightMax = A[n - 1];
//         for (let i = n - 2; i >= 0; i--) {
//             rightMax[i] = Math.max(rightMax[i + 1], A[i])

//         }
//         let ans = 0;
//         for (let i = 0; i < n; i++) {
//             if (leftMax[i - 1] && leftMax[i - 1]) {
//                 ithValue = Math.min(leftMax[i - 1], rightMax[i + 1]) - A[i]
//                 ans += Math.max(ithValue, 0)
//             }

//         }
//         return ans;
    
     let l = 0, r = height.length - 1, total = 0;
    let maxLeft = height[l], maxRight = height[r];
    
    while (l < r) {
        if (maxLeft < maxRight) {
            l++;
            maxLeft = Math.max(maxLeft, height[l]);
            total += maxLeft - height[l];
        } else {
            r--;
            maxRight = Math.max(maxRight, height[r]);
            total += maxRight - height[r];
        }
    }
    return total;
}