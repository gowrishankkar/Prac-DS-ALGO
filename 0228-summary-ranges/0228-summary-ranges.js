/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(A) {
    const s = []
    for(let start = 0; start<A.length;){
        let end = start;
        while(end+1<A.length && A[end] +1 >= A[end + 1]) ++end;
        s.push(start == end  ? `${A[start]}` : `${A[start]}->${A[end]}`);
        start = end +1;
    }
    return s;
};