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
    if(height.length === 0 ) return 0;
    let A = height;
    let n = height.length;
    let left = 0
    let right = n-1;
    let leftMax = 0;
    let rightMax = 0;
    let ans = 0;
    while(left<right){
        leftMax = Math.max(leftMax , A[left])
        if(leftMax > A[left]){
            ans += leftMax - A[left]
        }
        rightMax = Math.max(rightMax , A[right])
        if(rightMax > A[right]){
            ans += rightMax - A[right]
        }
        
        A[left] > A[right] ? right-- : left++
        
    }
        return ans
}