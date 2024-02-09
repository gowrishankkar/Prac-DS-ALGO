/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const possibles = new Map()
    words.sort((a, b) => {
        return a.length - b.length
    })
    // console.log(words)
    let longest = 1
    possibles.set(words[0], 1)
    words.forEach(word => {
        let localLongest = 1
        for (let i = 0; i < word.length; i++) {
            const subword = word.slice(0, i) + word.slice(i + 1)
            if (possibles.has(subword)) {
                localLongest = Math.max(localLongest, possibles.get(subword) + 1)
            }
        }
        possibles.set(word, localLongest)
        longest = Math.max(longest, localLongest)
    })
    return longest
};