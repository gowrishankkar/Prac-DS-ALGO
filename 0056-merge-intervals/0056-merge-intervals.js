/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if(a[0] == b[0]) return b[1] - a[1];
        return a[0] - b[0]
    })
    
    let ret = [];
    let n = intervals.length;
    
    for(let i = 0; i< n ; i++){
        let end = intervals[i][1];
        let j = i;
        
        while( j + 1 < n && intervals[j+1][0] <= end){
            j++
            end = Math.max(intervals[j][1], end);
        }
        intervals[i][1] = end;
        
        ret.push(intervals[i])
        i=j
        
        
    }
    return ret;
};