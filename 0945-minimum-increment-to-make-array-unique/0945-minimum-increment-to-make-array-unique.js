/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A.sort((a, b) => a-b);
        let steps =0;
        if(A.length==0)return steps;
        let nextVal = A[0]+1;//first value will be unique
        
        for(let i =1;i<A.length;i++){
            if(A[i]==A[i-1]){
                steps += nextVal - A[i];
                
            }
            else{
                nextVal = Math.max(nextVal, A[i]);
                steps+= nextVal -A[i];
                
            }
            nextVal++;
        }
    return steps;
};