/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
     const prepainted = new Set();
  for(let [idx,val] of houses.entries()){
    if(val !== 0 ){
      prepainted.add(idx);
    }
  }
  function loopOverEachHouse(houseIndex,prevColour,nighbourCount,memo){
    let key = `${houseIndex},${prevColour},${nighbourCount}`;
    if(houseIndex===m){
      if(nighbourCount === target) return 0;
      return Number.MAX_SAFE_INTEGER;
    }
    if(key in memo){
      return memo[key];
    }
    if(nighbourCount>target){
      memo[key]=Number.MAX_SAFE_INTEGER;
      return Number.MAX_SAFE_INTEGER;
    }
    let minCost = Number.MAX_SAFE_INTEGER;
    if(prepainted.has(houseIndex)){
      if(prevColour!==houses[houseIndex]){
        minCost = loopOverEachHouse(houseIndex+1,houses[houseIndex],nighbourCount+1,memo);
      }else{
        minCost = loopOverEachHouse(houseIndex+1,houses[houseIndex],nighbourCount,memo);
      }
    }else{
      for(let i=0;i<n;i++){
        const currentColor = i+1;
        let currCost = cost[houseIndex][i];
        if(currentColor === prevColour){
          currCost+=loopOverEachHouse(houseIndex+1,currentColor,nighbourCount,memo);
        }else{
          currCost+=loopOverEachHouse(houseIndex+1,currentColor,nighbourCount+1,memo);
        }
        minCost = Math.min(minCost,currCost);
      }
    }
    memo[key]= minCost;
    return minCost;
  };
  let min = loopOverEachHouse(0,0,0,{});
  return min === Number.MAX_SAFE_INTEGER ? -1:min;
};