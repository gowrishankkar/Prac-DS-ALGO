/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let p1 = 0, p2 = 0;
    let d1 = 0, d2 = 0; //makeup number between two dots
    while (p1 < version1.length || p2 < version2.length){ //0.0 < 0.0.1
        while (p1 < version1.length && version1[p1] != "."){
            d1 = d1 * 10 + parseInt(version1[p1]);
            p1 ++;
        }
        while (p2 < version2.length && version2[p2] != "."){
            d2 = d2 * 10 + parseInt(version2[p2]);
            p2 ++;
        }

        if (d1 > d2) return 1;
        else if (d1 < d2) return -1;
        
        //now it is .
        p1 ++;
        p2 ++;
        d1 = 0;
        d2 = 0;
    }
    return 0
};