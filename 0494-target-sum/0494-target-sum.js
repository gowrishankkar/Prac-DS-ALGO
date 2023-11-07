/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const map = new Map()
  const backtraking = (target, index)=>{
    let key = target+'.'+index
    if(index === nums.length){
      if(target === 0) return 1
      return 0
    }
    if(map.has(key)) return map.get(key)

    let res = 0
    let max = backtraking(target + nums[index], index+1)
    let min = backtraking(target - nums[index], index+1)
    res += max+min

    map.set(key, res)
    return res
  }

  return backtraking(target, 0)
};