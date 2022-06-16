/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    // const sortedArray = [...candies];
    // sortedArray.sort((a,b) => a-b);
    // let greatest = Math.max(...candies)
    // console.log('greatest', greatest)
  return  candies.map((candy)=>
          (candy + extraCandies) >= Math.max(...candies)

      )
    
   
};