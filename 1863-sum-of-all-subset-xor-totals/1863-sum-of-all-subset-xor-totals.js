/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = (nums) => arraySum(arraySubsets(nums).map((subset) => arrayXor(subset)));

const arrayXor = (arr) => arr.reduce((p, c) => p ^ c, 0);

const arraySum = (arr) => arr.reduce((p, c) => p + c, 0);

const arraySubsets = (arr) => {
  const subsets = [];
  const find = (result, arr, temp, index) => {
    if (index === arr.length) {
      result.push(temp);
      return;
    }
    find(result, arr, [...temp], index + 1);
    temp.push(arr[index]);
    find(result, arr, [...temp], index + 1);
  };
  find(subsets, arr, [], 0);
  return subsets;
};
