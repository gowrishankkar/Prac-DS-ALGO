/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// var findLadders = function(beginWord, endWord, wordList) {
//     let n = beginWord.length;
//     let q = [];
//     let list = [beginWord];
//     q.push(list);
//     let set = new Set([...wordList]);
//     let level = 0;
//     let usedOnLevel = [beginWord]
//     let ans = [];
//     while(q.length){
//         let wordL =  q.shift();
//         if(wordL.length > level){
//             level++;
//             for(let it of usedOnLevel){
//                 set.delete(it);
//             }
//         }
//         let word = wordL[wordL.length - 1] ;
//         if(word === endWord) ans.push(wordL);
//         for(let i = 0; i < word.length ; i++){
//             for (const char of 'abcdefghijklmnopqrstuvwxyz') {
//                 let newWord =  word.split('')
//                 newWord[i] = char;
//                 newWord = newWord.join('')
//                 if(set.has(newWord)){
//                     q.push([...wordL, newWord])
//                     usedOnLevel.push(newWord)
//                 }
//             }
//         }
//     }
//     return ans;
// };



// var findLadders = function(beginWord, endWord, wordList) {
//     let n = beginWord.length;
//     let q = [];
//     let list = [beginWord];
//     q.push(list);
//     let set = new Set([...wordList]);
//     let level = 0;
//     let usedOnLevel = [new Set([beginWord])];
//     let ans = [];
//     set.delete(beginWord)
//     while(q.length){
//         let wordL =  q.shift();
//         if(wordL.length > level){
//             level++;
//             for(let it of usedOnLevel){
//                 set.delete(it);
//             }
//         }
//         let word = wordL[wordL.length - 1] ;
//         if(word === endWord) {
//             ans.push(wordL);
//         }
//         else {
//             for(let i = 0; i < word.length ; i++){
//                 for(let j = 0; j < 26; j++) {
//                     const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
//                     if(set.has(newWord)){
//                     q.push([...wordL, newWord])
//                     usedOnLevel.push(newWord)
//                     }
//                 }
//             }   
//         }
       
//     }

//     return ans;
// };


var findLadders = function(beginWord, endWord, wordList) {
	/** map to store level/distance of word and its parents words 
	*	e.g. hm.set("hot", { level: 2, list: ["hit"] })
	*/
    const hm  = new Map(); 

    wordList.map((val) => hm.set(val, null))
    
    /* No need check check further if target word in not in wordList */
    if(!hm.has(endWord)) {
        return [];
    }
    
    const queue = [];
    queue.push(beginWord);
    hm.set(beginWord,{level: 1, list: []});
  
    /* array of all allowed characters  */
    const alph = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); 
    let itr = 0;
    while (itr < queue.length) {
        const word = queue[itr++];
        if(word == endWord) {
            return helper(hm, beginWord, endWord);
        }
        else {
            for(let i = 0; i < word.length; i++) {
                for(let j = 0; j < alph.length; j++) {
					/* all possible next words */
                    const newWord = word.substring(0, i) + alph[j] + word.substring(i+1); 
					/* if newWord appear first time, push word to queue and update hashmap value corresponding to newWord */
                    if(hm.has(newWord) && hm.get(newWord) == null) { 
                        queue.push(newWord);
                        const l = hm.get(word).level
                        hm.set(newWord, {level: l+1, list: [word]});
                    }
                    else if(hm.has(newWord) && hm.get(newWord).level == hm.get(word).level+1) { 
					// case: newWord not appearing first time, and is generate from word 1 level/distance below/lesser
                        hm.get(newWord).list.push(word)
                    }
                }
            }
        }
    }
    return []
};
/*
generate all path from endWord to beginWord
*/
const helper = (hm, beginWord, endWord)=> {
    if(beginWord == endWord) return [[beginWord]];
    const list = [];
    for(let word of hm.get(endWord).list) {
        const tempArr = helper(hm, beginWord, word);
        for(let temp of tempArr) {
            list.push(temp.concat(endWord));
        }
    }
    return list
}