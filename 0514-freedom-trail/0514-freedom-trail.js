/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
    let dp = new Array(ring.length).fill(0);
    let ringMap = new Map();
    let steps = Infinity;

    //the postions we can get char ring[i]
    for (let i = 0; i < ring.length; i++) {
        ringMap.has(ring[i]) ? ringMap.get(ring[i]).add(i) : ringMap.set(ring[i], new Set([i]));
    }

    let prePositions = new Set([0]);
    for (let i = 0; i < key.length; i++) {
        let keyChar = key[i];
        let curPos = ringMap.get(keyChar);
        for (let cur of curPos.values()) {
            let minCur = Infinity;

            if (i > 0 && key[i - 1] === key[i]) {
                //if it's same char from pre char, don't need to move, just spell
                dp[cur]++;
            } else {
                //calculate the minimum steps to rotate to cur position
                for (let pre of prePositions.values()) {
                    let diff = Math.abs(cur - pre);
                    let curSteps = dp[pre] + Math.min(diff, ring.length - diff) + 1;
                    minCur = Math.min(minCur, curSteps);
                }
                dp[cur] = minCur;
            }
        }
        prePositions = curPos;
    }

    for (let ringPos of ringMap.get(key[key.length - 1]).values()) {
        steps = Math.min(steps, dp[ringPos]);
    }

    return steps;
};
