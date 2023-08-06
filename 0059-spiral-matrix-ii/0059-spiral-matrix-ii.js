/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

    let r0 = 0, r1 = n - 1, c0 = 0, c1 = n - 1;
    let res = new Array(n).fill([]).map((ele) => new Array(n).fill(0))
    console.log('res', res)
    let x = 1
    while(r0 <= r1 && c0 <= c1){
        for(let c = c0; c <= c1 ; ++c) res[r0][c] = x++;
        ++r0;
        for(let r = r0; r <= r1 ; ++r)res[r][c1] = x++;
        --c1;
        if (r0 <= r1){
            for(let c = c1; c >= c0 ; --c) res[r1][c] = x++;
            --r1;  
        }
       if (c0 <= c1){
            for(let r = r1; r >= r0 ; --r) res[r][c0] = x++;
            ++c0;
        }

    }
    return res
      
};