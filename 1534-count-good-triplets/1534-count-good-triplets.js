/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let resultCount = 0
    for(let i = 0; i < arr.length-2; i++){
        for(let j = i+1; j < arr.length-1; j++){
             for(let k = j+1; k < arr.length; k++){
                 let checkBase =  0 <= i < j < k < arr.length;
                 let mod1 = Math.abs(arr[i] - arr[j]);
                 let mod2 = Math.abs(arr[j] - arr[k]);
                 let mod3 = Math.abs(arr[i] - arr[k]);
                 if(mod1<= a && mod2<= b && mod3<= c && checkBase){
                     resultCount++;
                 }
                 
        
            }
        } 
    }
    console.log('resultCount', resultCount)
    return resultCount;
    
};