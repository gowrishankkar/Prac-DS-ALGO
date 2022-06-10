/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result = 0;
    for(let i = 0; i < sentences.length; i++){
        let stest = sentences[i].split(" ");
        if(result <= stest.length) result = stest.length
    }
    return result
};