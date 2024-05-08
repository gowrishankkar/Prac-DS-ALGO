/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const map = new Map();
    const copy = [...score];
    copy.sort((a, b) => b - a);
    for (let i = 0; i < copy.length; i++) {
        map.set(copy[i], i + 1);
    }
    
    const res = [];
    for (let i = 0; i < score.length; i++) {
        if (map.get(score[i]) === 1) res.push("Gold Medal");
        else if (map.get(score[i]) === 2) res.push("Silver Medal");
        else if (map.get(score[i]) === 3) res.push("Bronze Medal");
        else res.push(map.get(score[i]).toString());
    }
    return res;
};