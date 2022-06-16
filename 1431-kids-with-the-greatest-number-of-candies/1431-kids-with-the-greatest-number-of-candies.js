/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    const sortedArray = [...candies];
    sortedArray.sort((a,b) => a-b);
    let greatest = sortedArray[sortedArray.length-1];
    console.log('greatest', greatest)
  
    // for (let i = 0; i <= candies.length; i++) {
    //     // candies[i] += extraCandies;
    //     // outputArray.push(candies[i] >= greatest);
    // }
      let outputArray = candies.map((candy)=>{
          if((candy + extraCandies) >= greatest) return true;
          else return false;
      })
    
    return outputArray;
};