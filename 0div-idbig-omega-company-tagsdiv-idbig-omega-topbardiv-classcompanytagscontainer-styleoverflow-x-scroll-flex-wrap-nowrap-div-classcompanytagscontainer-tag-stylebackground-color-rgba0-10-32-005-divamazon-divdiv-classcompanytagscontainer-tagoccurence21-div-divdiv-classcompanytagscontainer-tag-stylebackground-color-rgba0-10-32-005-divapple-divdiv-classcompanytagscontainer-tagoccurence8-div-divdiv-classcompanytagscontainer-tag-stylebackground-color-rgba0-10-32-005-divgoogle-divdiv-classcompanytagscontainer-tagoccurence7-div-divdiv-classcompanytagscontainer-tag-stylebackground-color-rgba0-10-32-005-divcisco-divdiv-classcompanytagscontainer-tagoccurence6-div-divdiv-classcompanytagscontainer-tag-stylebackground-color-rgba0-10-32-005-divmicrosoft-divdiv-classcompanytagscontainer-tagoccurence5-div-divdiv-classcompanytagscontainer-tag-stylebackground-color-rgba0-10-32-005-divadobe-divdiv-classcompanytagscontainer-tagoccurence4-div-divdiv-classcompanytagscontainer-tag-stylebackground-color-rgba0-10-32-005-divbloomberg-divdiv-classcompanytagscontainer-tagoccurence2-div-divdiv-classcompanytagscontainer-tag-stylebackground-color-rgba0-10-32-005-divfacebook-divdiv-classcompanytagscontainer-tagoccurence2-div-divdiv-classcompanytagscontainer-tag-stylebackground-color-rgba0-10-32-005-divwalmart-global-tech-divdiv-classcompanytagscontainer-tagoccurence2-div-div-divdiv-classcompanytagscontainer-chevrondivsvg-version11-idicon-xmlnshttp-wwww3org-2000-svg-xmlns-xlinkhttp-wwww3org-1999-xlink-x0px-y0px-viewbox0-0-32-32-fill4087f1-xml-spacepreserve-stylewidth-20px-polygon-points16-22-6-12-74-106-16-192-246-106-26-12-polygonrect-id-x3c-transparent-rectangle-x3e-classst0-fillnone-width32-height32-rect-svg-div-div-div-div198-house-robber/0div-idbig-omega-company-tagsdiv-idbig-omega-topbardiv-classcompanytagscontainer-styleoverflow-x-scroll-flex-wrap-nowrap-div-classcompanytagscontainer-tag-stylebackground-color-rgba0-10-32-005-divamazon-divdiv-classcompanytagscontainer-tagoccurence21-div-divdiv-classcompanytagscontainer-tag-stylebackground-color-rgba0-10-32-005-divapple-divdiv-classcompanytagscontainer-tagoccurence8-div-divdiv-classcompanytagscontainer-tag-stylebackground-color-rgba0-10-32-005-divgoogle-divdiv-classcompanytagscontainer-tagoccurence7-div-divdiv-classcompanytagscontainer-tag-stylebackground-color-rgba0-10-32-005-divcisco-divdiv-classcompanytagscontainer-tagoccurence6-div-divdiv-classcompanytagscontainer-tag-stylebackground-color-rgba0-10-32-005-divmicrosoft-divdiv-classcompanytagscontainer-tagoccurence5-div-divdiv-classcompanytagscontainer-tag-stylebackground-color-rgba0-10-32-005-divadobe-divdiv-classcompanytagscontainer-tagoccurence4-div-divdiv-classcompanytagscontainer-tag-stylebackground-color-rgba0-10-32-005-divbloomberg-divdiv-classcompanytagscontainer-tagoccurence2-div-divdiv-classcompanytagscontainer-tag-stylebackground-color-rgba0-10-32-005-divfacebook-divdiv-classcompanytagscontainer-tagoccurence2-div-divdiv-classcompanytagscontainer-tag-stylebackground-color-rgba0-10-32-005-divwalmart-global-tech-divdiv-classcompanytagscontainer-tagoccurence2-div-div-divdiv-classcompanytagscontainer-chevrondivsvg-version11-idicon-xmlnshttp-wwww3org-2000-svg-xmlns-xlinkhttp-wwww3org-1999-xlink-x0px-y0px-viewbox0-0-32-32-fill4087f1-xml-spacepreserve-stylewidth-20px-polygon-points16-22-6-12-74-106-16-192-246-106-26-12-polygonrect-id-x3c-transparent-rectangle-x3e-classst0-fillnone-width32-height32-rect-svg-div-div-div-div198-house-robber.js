/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = (nums) => {
//     if (!nums.length) return 0;

//     let [ left, mid ] = [ 0, 0 ];

//     for (const right of nums) {/* Time O(N) */
//         const temp = mid;
//         const house = left + right;

//         mid = Math.max(mid, house);
//         left = temp;
//     }

//     return mid;
// };


var rob = (nums) => {
    if (!nums.length) return 0;

    const tabu = initTabu(nums);

    for (let i = 1; i < nums.length; i++) {/* Time O(N) */
        const right = nums[i];
        const mid = tabu[i];
        const left = tabu[i - 1];
        const house = left + right;

        tabu[i + 1] = Math.max(mid, house);       /* Space O(N) */
    }

    return tabu[nums.length]
};

const initTabu = (nums) => {
    const tabu = Array(nums.length + 1).fill(0);

    tabu[1] = nums[0];

    return tabu;
}
