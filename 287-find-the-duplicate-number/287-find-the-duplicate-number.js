/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let A = nums
    let set = new Set();
        let minDupeElement = -1
        for(i=A.length -1; i>=0;i--){
            if(set.has(A[i])){
                minDupeElement = A[i]
            } else {
                set.add(A[i])
            }
        }
        if(minDupeElement == -1){
            return -1
        }
        return minDupeElement;
};