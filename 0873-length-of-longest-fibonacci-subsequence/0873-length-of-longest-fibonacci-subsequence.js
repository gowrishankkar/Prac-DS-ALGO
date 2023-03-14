/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {  
    const hash = new Map();
    
    for(const num of arr){
        hash.set(num, true);
    }
    
    let maxSequence = 0;
    
    for(let i = 0; i < arr.length; i++) {             
        for(let k = i + 1; k < arr.length; k++) {            
            let maxSubsequence = 0;
            let A = arr[i];
            let B = arr[k];
            
            while(hash.has(A+B)) {
                let prevA = A;
                A = B;
                B = prevA + B;
                
                ++maxSubsequence
            }
            
            maxSequence = Math.max(maxSequence, maxSubsequence ? maxSubsequence + 2 : maxSubsequence);
        }
    }
    
    return maxSequence;
};