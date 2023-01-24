/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = (nums) => {
    const isEmpty = nums.length === 0;
    if (isEmpty) return false;

    const sum = getSum(nums);        /* Time O(N) */

    const isEven = ((sum % 2) === 0);
    if (!isEven) return false;

    const subSetSum = (sum >> 1);
    const tabu = initTabu(subSetSum);/*               | Space O(M) */

    search(nums, subSetSum, tabu);   /* Time O(N * M) | Space O(M) */

    return tabu[subSetSum];
};

var getSum = (nums, sum = 0) => {
    for (const num of nums) { sum += num };/* Time O(N) */

    return sum;
}

var initTabu = (subSetSum) => {
    const tabu = new Array((subSetSum + 1)).fill(false);/* Space O(M) */

    tabu[0] = true;                                     /* Space O(M) */

    return tabu;
}

var search = (nums, subSetSum, tabu) => {
    for (const num of nums) {/* Time O(N) */
        update(num, subSetSum, tabu);/* Time O(M) | Space O(M) */
    }
}

var update = (num, subSetSum, tabu) => {
    for (let subSet = subSetSum; (num <= subSet); subSet--) {/* Time O(M) */
        const difference = (subSet - num);

        tabu[subSet] |= tabu[difference];                        /* Space O(M) */
    }
}