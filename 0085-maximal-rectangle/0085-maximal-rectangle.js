/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalRectangle = function(matrix) {
//       if(matrix.length === 0) {
//         return 0;
//     }
    
//     let [max, lmax, rmax, n ] = [0, 0, matrix[0].length, matrix[0].length];

//     const h = Array(matrix[0].length).fill(0);
//     const right = Array(matrix[0].length).fill(n);
//     const left = Array(matrix[0].length).fill(0);
//     for(let i = 0; i < matrix.length; i++) {
//         lmax = 0;
//         rmax = n;
//         for(let j = 0; j < n; j++) {
//             h[j] = (matrix[i][j] === '1') ? h[j]+1 : 0;
//         }
        
//         for(let j = 0; j < n; j++) {
//             if(matrix[i][j] === '1') {
//                 left[j] = Math.max(left[j], lmax);
//             } else {
//                 left[j] = 0;
//                 lmax = j+1;
//             }
//         }
        
//         for(let j = n; j >= 0; j--) {
//             if(matrix[i][j] === '1') {
//                 right[j] = Math.min(right[j], rmax);
//             } else {
//                 right[j] = n;
//                 rmax = j;
//             }
//         }
        
//         console.log(h, left, right);
//         for(let j = 0; j < n; j++) {
//             const area = h[j] * (right[j] - left[j]);
//             max = Math.max(max, area);
//         }
//     }
//     return max;
// };


// var maximalRectangle = function(matrix) {
//     if (!matrix || matrix.length === 0) {
//         return 0;
//     }

//     const rows = matrix.length;
//     const cols = matrix[0].length;

//     // Convert the matrix to an array of arrays of heights
//     const heights = Array.from({ length: rows }, () => Array(cols).fill(0));

//     // Populate the heights array
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (matrix[i][j] === '1') {
//                 heights[i][j] = i === 0 ? 1 : heights[i - 1][j] + 1;
//             }
//         }
//     }

//     console.log('heights', heights)
//     // Function to calculate the area of the largest rectangle in a histogram
//     const largestRectangleArea = function(heights) {
//         const stack = [];
//         let maxArea = 0;

//         for (let i = 0; i <= heights.length; i++) {
//             while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
//                 const height = heights[stack.pop()];
//                 const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//                 maxArea = Math.max(maxArea, height * width);
//             }
//             stack.push(i);
//         }

//         return maxArea;
//     };

//     let maxArea = 0;

//     // Calculate the largest rectangle area for each row and update the maxArea
//     for (let i = 0; i < rows; i++) {
//         maxArea = Math.max(maxArea, largestRectangleArea(heights[i]));
//     }

//     return maxArea;
// };




var maximalRectangle = function(matrix) {
    const largestRectangleArea = function(heights) {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i <= heights.length; i++) {
            while ( stack.length && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 
                            ? i 
                            : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        return maxArea
    }
    
    let maxArea = 0;
    let n = matrix.length, m = matrix[0].length; 
    let height = new Array(matrix[0].length).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 1) height[j]++;
            else height[j] = 0;
        }
        let area = largestRectangleArea(height);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
    
}

