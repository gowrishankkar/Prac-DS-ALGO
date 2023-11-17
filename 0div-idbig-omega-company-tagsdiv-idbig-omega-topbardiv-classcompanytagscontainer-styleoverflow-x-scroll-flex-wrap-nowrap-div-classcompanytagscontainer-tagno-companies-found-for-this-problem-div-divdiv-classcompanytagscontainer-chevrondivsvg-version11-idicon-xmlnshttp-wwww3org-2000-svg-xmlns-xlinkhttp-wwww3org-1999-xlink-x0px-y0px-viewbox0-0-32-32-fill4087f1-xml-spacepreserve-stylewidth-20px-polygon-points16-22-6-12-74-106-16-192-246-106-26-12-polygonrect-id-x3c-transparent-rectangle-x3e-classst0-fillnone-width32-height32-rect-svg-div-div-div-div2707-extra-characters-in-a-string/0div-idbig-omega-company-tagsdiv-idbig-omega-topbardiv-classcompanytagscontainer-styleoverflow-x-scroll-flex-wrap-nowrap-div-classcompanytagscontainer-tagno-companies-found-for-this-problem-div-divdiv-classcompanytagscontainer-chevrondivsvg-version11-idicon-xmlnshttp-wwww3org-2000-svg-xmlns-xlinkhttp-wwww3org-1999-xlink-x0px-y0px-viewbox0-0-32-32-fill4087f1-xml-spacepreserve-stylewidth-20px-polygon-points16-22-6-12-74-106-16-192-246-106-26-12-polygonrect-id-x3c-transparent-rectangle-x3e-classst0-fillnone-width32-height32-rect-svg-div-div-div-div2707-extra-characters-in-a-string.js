/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) 
{
    let dp = Array(1+s.length).fill(s.length);
    dp[0] = 0;
    for(let i=0; i<s.length; i++)
    {
        let offsets = [];
        for(let word of dictionary)
        {
            if(s.startsWith(word, i))
            offsets.push(word.length);
        }

        // console.log(i, offsets);
        for(let offset of offsets)
        {
            if(offset+i >= dp.length)
                continue;
            dp[offset+i] = Math.min(dp[offset+i], dp[i]);
        }
        if(i+1 < dp.length)
            dp[i+1] = Math.min(dp[i+1],1+dp[i]);
    }

    return dp[dp.length-1];
};