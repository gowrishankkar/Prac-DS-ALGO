/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let res = [],
    candidates = products.slice();
  for (let i = 0; i < searchWord.length; i++) {
    // Find the first occurrence and the last occurrence of matching word
    // All words between the first occurrence and the last occurrence are the next candidates
    let nextCandidates = [];
    let start = findOccurrence(candidates, searchWord, i, true);
    let end = findOccurrence(candidates, searchWord, i, false);
    if (start !== -1) {
      for (let j = start; j <= end; j++) {
        nextCandidates.push(candidates[j]);
      }
    }
    nextCandidates.length > 3
      ? res.push(nextCandidates.slice(0, 3))
      : res.push(nextCandidates);
    candidates = nextCandidates;
  }
  return res;
  // T.C: O(Nlog(N) + Mlog(N)), M = length of searchWord, N = length of products
  // S.C: O(N)
};

function findOccurrence(candidates, searchWord, i, findFirst) {
  let idx = -1;
  let low = 0,
    high = candidates.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (candidates[mid][i] > searchWord[i]) {
      high = mid - 1;
    } else if (
      candidates[mid][i] === undefined ||
      candidates[mid][i] < searchWord[i]
    ) {
      low = mid + 1;
    } else {
      if (findFirst) {
        if (mid === 0 || candidates[mid - 1][i] !== candidates[mid][i]) {
          idx = mid;
          break;
        } else {
          high = mid - 1;
        }
      } else {
        if (
          mid === candidates.length - 1 ||
          candidates[mid][i] !== candidates[mid + 1][i]
        ) {
          idx = mid;
          break;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return idx;
}