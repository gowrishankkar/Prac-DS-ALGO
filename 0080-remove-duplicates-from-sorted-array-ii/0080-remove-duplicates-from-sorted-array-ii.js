/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let i = 0;
    let j = 1;

    while (i < nums.length) {
        let cnt = 1;
        let indexAt = i;
        while (nums[i] === nums[j]) {
            cnt++;
            if (cnt === 2) {
                indexAt = i;
            }
            i++;
            j++;
        }
        if (cnt > 2) {
            nums.splice(indexAt, cnt - 2);
        }
        i = indexAt + 1;
        j = i + 1;
    }
};