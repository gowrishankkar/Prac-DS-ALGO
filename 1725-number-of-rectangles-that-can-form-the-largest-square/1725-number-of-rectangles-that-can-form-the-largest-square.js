/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let arr =  rectangles.map(rec=>{
                    return Math.min(...rec)
                })
   
  
    let result = arr.filter(function(value){
                     return value === Math.max(...arr);
                    }).length  

    return result
};