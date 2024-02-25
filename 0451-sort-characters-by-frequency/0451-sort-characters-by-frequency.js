/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let a = {};

  for (const b of s) {
    a[b] = a[b] ? a[b] + 1 : 1;
  }

  return Object.entries(a)
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0].repeat(x[1]))
    .join("");
};