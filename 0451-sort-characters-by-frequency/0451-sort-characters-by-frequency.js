/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();

    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    const arrMap = [...map];
    arrMap.sort((a,b) => b[1] - a[1]);
    

    let result = arrMap.map(([c,f]) => {
        
        return c.repeat(f)
    });


    return result.join('');

};