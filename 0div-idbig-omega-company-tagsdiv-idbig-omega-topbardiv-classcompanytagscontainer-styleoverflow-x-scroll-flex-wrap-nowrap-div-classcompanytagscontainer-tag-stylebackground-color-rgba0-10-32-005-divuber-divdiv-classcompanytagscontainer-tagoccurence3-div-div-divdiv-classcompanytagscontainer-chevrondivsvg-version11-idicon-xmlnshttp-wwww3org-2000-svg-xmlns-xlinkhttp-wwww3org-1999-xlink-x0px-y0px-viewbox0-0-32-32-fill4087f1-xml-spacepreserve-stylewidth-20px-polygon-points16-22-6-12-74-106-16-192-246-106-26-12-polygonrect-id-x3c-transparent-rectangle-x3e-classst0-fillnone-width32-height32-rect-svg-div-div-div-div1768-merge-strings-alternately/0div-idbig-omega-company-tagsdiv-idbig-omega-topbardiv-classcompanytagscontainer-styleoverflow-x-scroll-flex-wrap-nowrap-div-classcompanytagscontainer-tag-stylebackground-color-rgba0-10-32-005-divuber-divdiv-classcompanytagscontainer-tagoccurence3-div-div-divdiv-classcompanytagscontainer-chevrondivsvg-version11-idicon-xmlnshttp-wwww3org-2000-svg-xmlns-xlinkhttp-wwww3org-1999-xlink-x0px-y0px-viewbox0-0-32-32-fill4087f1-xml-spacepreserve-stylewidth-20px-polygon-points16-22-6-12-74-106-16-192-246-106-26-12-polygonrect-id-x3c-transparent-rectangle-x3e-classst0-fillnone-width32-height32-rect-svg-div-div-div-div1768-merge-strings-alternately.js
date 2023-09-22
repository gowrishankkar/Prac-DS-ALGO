/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let n = word1.length;
    let m = word2.length;
    let i = 0, j = 0;
    let res = '';
    while( i < n && j < m){
        res = res + word1[i++] + word2[j++] 
    }
    while( i < n){
        res = res + word1[i++]  
    }
    
    while( j < m){
        res = res + word2[j++]  
    }
    return res;
};