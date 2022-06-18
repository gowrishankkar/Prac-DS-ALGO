/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let test = s.split(' ');
    // console.log('test', test)
    let result = [];
    for(let i=0; i < test.length ; i++){
        if(i<k) result.push(test[i])
        
    }
    console.log('result',result)
    return result.join(" ")
};