const MOD = 1e9 + 7;

var countVowelPermutation = function(n) {
    const constraints = {
        '': 'aeiou',
        a: 'e',
        e: 'ai',
        i: 'aeou',
        o: 'iu',
        u: 'a'
    };
    
    const dp = new Array(n).fill(0).map(() => ({}));

    const compute = (i = 0, pc = '') => {
        if(i == n) return 1;
        
        if(pc in dp[i]) return dp[i][pc];
        
        let cnt = 0;
        for(let c of constraints[pc]) {
            cnt = (cnt + compute(i + 1, c)) % MOD;
        }
        
        return dp[i][pc] = cnt % MOD;
    }
    return compute();
};