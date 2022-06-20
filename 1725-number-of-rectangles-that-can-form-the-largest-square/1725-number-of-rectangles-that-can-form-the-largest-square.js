/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let arr =  rectangles.map(rec=>{
                    return Math.min(...rec)
                })
   
//   method 1
//     let result = arr.filter(function(value){
//                      return value === Math.max(...arr);
//                     }).length  

//     return result
    
    
    
    
    // method 2
//     const count = {};

//         arr.forEach(element => {
//           count[element] = (count[element] || 0) + 1;
//         });
    
//     // console.log('count', count[Math.max(...arr)])
//     return count[Math.max(...arr)]
    
    
    // method 3
    let maxLenAmt = 0;

    for (let num of arr) {
        if (num === Math.max(...arr)) maxLenAmt++;
    }

    return maxLenAmt;
    
    
};