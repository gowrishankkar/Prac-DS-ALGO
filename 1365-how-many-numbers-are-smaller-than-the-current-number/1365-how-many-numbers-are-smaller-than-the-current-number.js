/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let resultArr = []
    nums.forEach((ele1)=>{
       let currentGreaterNum = 0;
         nums.forEach((ele2)=>{
            if(ele1 > ele2) currentGreaterNum++;
             
        })
        resultArr.push(currentGreaterNum)
    })
    
    console.log('resultArr', resultArr)
    return resultArr;
};