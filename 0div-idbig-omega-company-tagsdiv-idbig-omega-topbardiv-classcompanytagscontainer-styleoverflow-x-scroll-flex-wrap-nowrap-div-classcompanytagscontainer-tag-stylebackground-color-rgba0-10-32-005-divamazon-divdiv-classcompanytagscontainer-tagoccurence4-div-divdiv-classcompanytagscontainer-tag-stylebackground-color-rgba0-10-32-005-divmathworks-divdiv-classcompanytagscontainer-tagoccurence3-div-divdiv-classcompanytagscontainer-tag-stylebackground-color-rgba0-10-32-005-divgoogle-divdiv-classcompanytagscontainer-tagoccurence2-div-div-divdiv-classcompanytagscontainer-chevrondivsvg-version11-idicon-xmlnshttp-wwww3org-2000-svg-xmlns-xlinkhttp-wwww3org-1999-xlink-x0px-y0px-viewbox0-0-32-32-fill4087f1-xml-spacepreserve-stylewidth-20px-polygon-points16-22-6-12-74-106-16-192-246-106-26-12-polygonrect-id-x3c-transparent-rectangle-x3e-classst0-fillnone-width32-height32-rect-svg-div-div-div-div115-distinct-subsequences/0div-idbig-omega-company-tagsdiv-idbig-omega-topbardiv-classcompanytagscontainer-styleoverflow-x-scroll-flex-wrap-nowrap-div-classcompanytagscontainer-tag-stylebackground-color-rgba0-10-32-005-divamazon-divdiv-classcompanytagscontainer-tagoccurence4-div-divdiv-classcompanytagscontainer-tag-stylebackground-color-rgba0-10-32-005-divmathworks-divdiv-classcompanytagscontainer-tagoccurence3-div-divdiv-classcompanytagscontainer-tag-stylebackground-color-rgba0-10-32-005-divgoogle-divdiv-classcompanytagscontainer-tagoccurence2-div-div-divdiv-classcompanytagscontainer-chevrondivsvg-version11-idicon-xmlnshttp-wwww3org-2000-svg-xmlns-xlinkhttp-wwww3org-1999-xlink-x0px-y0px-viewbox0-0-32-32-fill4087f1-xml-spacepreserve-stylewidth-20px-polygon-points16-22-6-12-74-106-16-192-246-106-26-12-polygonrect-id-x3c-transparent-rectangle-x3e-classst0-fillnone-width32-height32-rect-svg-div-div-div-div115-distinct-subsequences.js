var numDistinct = (s, t) => {
    const tabu = initTabu(s, t);/* Time O(N * M) | Space O(N * M) */

    search(s, t, tabu);         /* Time O(N * M) | Space O(N * M) */

    return tabu[0][0];
}

var initTabu = (s, t) => {
    const tabu = new Array(s.length + 1).fill()/* Time O(N) | Space O(N) */
        .map(() => new Array(t.length + 1));       /* Time O(M) | Space O(M) */

    tabu[s.length].fill(0);                    /*           | Space O(N * M) */

    for (let r = 0; r <= s.length; ++r) {      /* Time O(N) */
        tabu[r][t.length] = 1;                     /*       | Space O(N * M) */
    }

    return tabu;
}

var search = (s, t, tabu) => {
    for (let r = (s.length - 1); (0 <= r); r--) {/* Time O(N) */
        for (let c = (t.length - 1); (0 <= c); c--) {/* Time O(M) */
            const left = tabu[r + 1][c];

            const isEqual = (s[r] === t[c]);

            const right = isEqual
                ? tabu[r + 1][c + 1] 
                : 0
            
            tabu[r][c] = left + right;                     /* Space O(N * M) */
        }
    }
}
