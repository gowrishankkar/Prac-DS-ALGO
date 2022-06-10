/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count = 0;
    for(let i = 0; i < sentences.length; i++){
        let wordCount = sentences[i].split(" ").length;
        if(count <= wordCount) count = wordCount
    }
    return count
};