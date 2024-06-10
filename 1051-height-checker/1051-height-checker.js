/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const originalHeights = [...heights];
  let result = 0;

  heights.sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (originalHeights[i] !== heights[i]) {
      result++;
    }
  }

  return result;
};