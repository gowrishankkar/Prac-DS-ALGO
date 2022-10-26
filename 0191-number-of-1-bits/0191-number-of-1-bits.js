/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     return n.toString(2).split("1").length-1;
// };
var hammingWeight = function(n) {
    
    //let arr=[]; 
    let count=0;
    
    let a=(n >>> 0).toString(2);          //conversion to binary string
    
      //transtfer integer to string and save in array for iteration   (too slow!!)
        for(let k of a) if(k ==1) count++;                                   
        // string can also be regarded as array-like object,  a[k] 
        //charAt(i) obatain the ith character by giving the index of the strin         
        //push() add a element to the end of array
        return count;
};