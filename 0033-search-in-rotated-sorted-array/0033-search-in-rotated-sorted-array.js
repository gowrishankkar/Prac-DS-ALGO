/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let A = nums;
    let B = target
       let l = 0;
        let r = A.length - 1;
        while (l <= r) {
            let mid = parseInt((l + r) / 2);

            if (A[mid] === B) return mid

            // Left
            if (A[mid] >= A[l]) {

                if (A[l] <= B && A[mid] >= B) {
                    r = mid - 1
                } else l = mid + 1
            } else {
                if (A[r] >= B && A[mid] <= B) {
                    l = mid + 1
                } else r = mid - 1
            }

        }
        return -1
};