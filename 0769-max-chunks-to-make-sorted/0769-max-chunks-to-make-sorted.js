/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(A) {
     let n = A.length;
        let chunks = 0;
        let ele = 0;
        for (let i = 0; i < n; i++) {
            ele = Math.max(ele, A[i]);
            if (ele == i) {
                chunks++;
            }

        }
        return chunks;
};