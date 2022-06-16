/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    // const sortedArray = [...candies];
    // sortedArray.sort((a,b) => a-b);
    let greatest = Math.max(...candies)
    console.log('greatest', greatest)
      let outputArray = candies.map((candy)=>{
          if((candy + extraCandies) >= greatest) return true;
          else return false;
      })
    
    return outputArray;
};