/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(A, B) {
     let ans = [], queue = [], n = A.length;
        for (let i = 0; i < n; i++) {
            if (queue.length && queue[0] < i - B + 1) queue.shift();
            while (queue.length && A[queue[queue.length - 1]] <= A[i]) queue.pop();
            queue.push(i);
            if (i >= B - 1) ans.push(A[queue[0]]);
        }
        return ans;
};