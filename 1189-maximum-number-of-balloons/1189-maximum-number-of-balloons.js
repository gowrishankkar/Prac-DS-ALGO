/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    const  balloonCach = {};
    const ballonSet = new Set(text.split(''));
   
    for (const char of text) {
      if (!ballonSet.has(char)) continue;

        const count = ((balloonCach[char] ?? 0) + 1)
        balloonCach[char] = count;
    }

    let min = Math.min(balloonCach['b'], 
                        balloonCach['a'], 
                        balloonCach['n'], 
                        Math.floor(balloonCach['l']/2), 
                        Math.floor(balloonCach['o']/2));
    
    return min ? min : 0;
};
