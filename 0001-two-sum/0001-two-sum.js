/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = (nums, target) => {
//     for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
//         const complement = target - nums[curr];

//         for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
//             const num = nums[next];

//             const isTarget = num === complement
//             if (isTarget) return [ curr, next ];
//         }
//     }

//     return [ -1, -1 ];
// }



var twoSum = (nums, target) => {
    const map = getMap(nums);       /* Time O(N) | Space O(N) */
    console.log('map', map)
    return getSum(nums, target, map)/* Time O(N) */
}

const getMap = (nums, map = new Map()) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        map.set(nums[index], index);                        /* Space O(N) */
    }

    return map
}

const getSum = (nums, target, map) => {
    for (let index = 0; index < nums.length; index++) {/* Time O(N) */
        const complement = target - nums[index];
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement) && (map.get(complement) !== index)
        if (isTarget) return [ index, sumIndex ]
    }

    return [ -1, -1 ];
}