/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    
    var rob1 = (arr) => {
        let n = arr.length;
        let prev = arr[0];
        let prev2 = 0;
        for (let i = 1; i < n; i++) {
            let pick = arr[i];
            if (i > 1) {
                pick += prev2;
            }
            const nonPick = prev;
            const cur_i = Math.max(pick, nonPick);
            prev2 = prev;
            prev = cur_i;
        }
        return prev;
    };
    
    
    const arr1 = [];
    const arr2 = [];
    const n = nums.length
    if (n === 1) {
        return nums[0];
    }
    
    for (let i = 0; i < n; i++) {
        if (i !== 0) arr1.push(nums[i]);
        if (i !== n - 1) arr2.push(nums[i]);
    }
    const ans1 = rob1(arr1);
    const ans2 = rob1(arr2);
    
    return Math.max(ans1, ans2);
    
};