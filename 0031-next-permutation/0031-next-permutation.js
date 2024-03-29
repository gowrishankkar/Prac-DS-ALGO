var nextPermutation = function(nums) {
    let i = nums.length - 2

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= i && nums[j] <= nums[i]) {
            j--
        }
        swap(nums, i, j)
    }

    reverse(nums, i + 1)
};

const swap = (nums, i, j) => {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

const reverse = (nums, start) => {
    let left = start
    let right = nums.length - 1

    while (left <= right) {
        swap(nums, left, right)
        left++
        right--
    }
}