/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
    let res = 0, l = 0, r = removable.length - 1;
    let removedSet = new Set();
    while(l <= r){
        let mid = l + Math.floor((r - l) / 2);
          removedSet.clear();
            for( let i=0; i <= mid; i++ ) {
                removedSet.add(removable[i]);
            }
        if(isSubseq(s, p, removedSet)){
            l = mid + 1;
            res = Math.max(res, mid + 1);
        }
        else r = mid - 1
    }
    return res;
};

var isSubseq = (str, p, removedSet) =>{
    let i = 0, j = 0;
    while( i < str.length && j < p.length){
        if(removedSet.has(i) || str[i] !== p[j]) {
            i++;
            continue;
        }
        i++;
        j++;
    }
    return j == p.length;
}