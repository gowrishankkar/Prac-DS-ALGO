/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
    
//     const numberSet = new Set();

//     for(let i = 1; i < nums.length + 1; i++) {
//         numberSet.add(i);
//     }

//     nums.forEach((element) => {
//         if(numberSet.has(element)) {
//             numberSet.delete(element);
//         }
//     });

//     return Array.from(numberSet);
// };
var findDisappearedNumbers = function(nums) {
    let res = []
    nums.forEach((val, ind, arr) => {
        let tmp = Math.abs(arr[ind]) - 1;
        if (arr[tmp] > 0)
            arr[tmp] *= -1;
    })
    nums.forEach((val, ind) => {
        if (val > 0)
            res.push(ind + 1)
    })
    return res
};