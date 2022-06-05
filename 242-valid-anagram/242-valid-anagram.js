/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    console.log(s.length, t.length);
    result = {};
    if(s.length !== t.length)
        return false
    for(const i in s){
        console.log('i', s[i])
        if(!result[s[i]]) result[s[i]] = 1;
        else result[s[i]]++;
        
    }
    
    for(const i in t){
        console.log('i', t[i])
        if(!result[t[i]]) return false
        else result[t[i]]--;
        
    }
    
    for(let key in result){
        if(result[key] !== 0) return false
    }
    console.log(result)
    return true
};