/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    const len=nums.length;
    let closest=nums[0]+nums[1]+nums[len-1];
    for(let i=0;i<len-2;i++){
        let j=i+1;
        let k=len-1;
        while(j<k){
            let sum=nums[i]+nums[j]+nums[k];
            if(sum<=target) j++;
            else if(sum>target) k--;
            if(Math.abs(closest - target) > Math.abs(sum - target)){
                closest=sum;
            }
        }
    }
    return closest;
};