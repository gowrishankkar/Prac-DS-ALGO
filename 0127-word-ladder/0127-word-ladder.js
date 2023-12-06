/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    let n = beginWord.length;
    let q = [];
    q.push([beginWord, 1]);
    let set = new Set([...wordList]);
    while(q.length){
        let [word, step] =  q.shift();
        if(word === endWord) return step;
        for(let i = 0; i < n ; i++){
            for (const char of 'abcdefghijklmnopqrstuvwxyz') {
                let newWord =  word.split('')
                newWord[i] = char;
                newWord = newWord.join('')
                if(set.has(newWord)){
                   set.delete(newWord);
                   q.push([newWord, step + 1])
                }
            }
        }
    }
    return 0;
};


// var ladderLength = function(beginWord, endWord, wordList) {
//     const wordSet = new Set(wordList)
//     let queue = [beginWord];
//     let steps = 1;
    
//     while(queue.length) {
//         const next = [];
        
//         // loop over each word in the queue
//         for(let word of queue) {
//             if(word === endWord) return steps;
            
//             // loop over each char of the word 
//             for(let i = 0; i < word.length; i++) {
                
//                 // and replace the char with letters from [a - z]
//                 for(let j = 0; j < 26; j++) {
//                     const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
//                     // if the new word exist in the word list add it to the queue
//                     if(wordSet.has(newWord)) {
//                         next.push(newWord);
//                         wordSet.delete(newWord);
//                     }
//                 }
//             }
//         }
//         queue = next
//         steps++;
//     }
//     return 0;    
// };



// var ladderLength = function(beginWord, endWord, wordList) {
//     const [ queue, wordSet, seen ] = [ new Queue([[ beginWord, 1 ]]), new Set(wordList), new Set([ beginWord ]) ];

//     return bfs(queue, wordSet, seen, endWord);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
// };

// const bfs = (queue, wordSet, seen, endWord) => {
//     while (!queue.isEmpty()) {
//         for (let i = (queue.size() - 1); 0 <= i; i--) {
//             const [ word, depth ] = queue.dequeue();

//             const isTarget = word === endWord
//             if (isTarget) return depth

//             transform(queue, wordSet, seen, word, depth)
//         }
//     }

//     return 0
// }

// const transform = (queue, wordSet, seen, word, depth) => {
//     for (const index in word) {
//         for (const char of 'abcdefghijklmnopqrstuvwxyz') {
//             const neighbor = getNeighbor(word, index, char);

//             const hasSeen = !wordSet.has(neighbor) || seen.has(neighbor);
//             if (hasSeen) continue;

//             queue.enqueue([ neighbor, (depth + 1) ]);
//             seen.add(neighbor);
//         }
//     }
// }

// const getNeighbor = (word, index, char) => {
//     const neighbor = word.split('');

//     neighbor[index] = char;

//     return neighbor.join('');
// }
