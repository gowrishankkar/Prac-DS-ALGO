/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const s1Len = s1.length, s2Len = s2.length, s3Len = s3.length, mem = {};
    const isInterleaveRec = function(i1 = 0, i2 = 0, i3 = 0){
        if(i1 === s1Len && i2 === s2Len && i3 === s3Len){
            return true;
        }
        else if(i1 === s1Len){
            return s2.slice(i2) === s3.slice(i3);
        }
        else if(i2 === s2Len){
            return s1.slice(i1) === s3.slice(i3);
        }
        else if(i3 === s3Len){
            //Should not happened
            return false;
        }
        
        let flag = [i1, i2, i3].join(',');
        if(mem[flag] === undefined){
            let res = false;
            if(s3[i3] !== s1[i1] && s3[i3] !== s2[i2]){
                mem[flag] = false;
            }
            if(s3[i3] === s1[i1]){
                res = res || isInterleaveRec(i1 + 1, i2, i3 + 1);
            }
            if(!res && s3[i3] === s2[i2]){
                res = res || isInterleaveRec(i1, i2 + 1, i3 + 1);
            }
            mem[flag] = res;
        }
        return mem[flag];
    }
    
    if(s1Len + s2Len !== s3Len){
        return false;
    }
    else{
        return isInterleaveRec();
    }
    
};