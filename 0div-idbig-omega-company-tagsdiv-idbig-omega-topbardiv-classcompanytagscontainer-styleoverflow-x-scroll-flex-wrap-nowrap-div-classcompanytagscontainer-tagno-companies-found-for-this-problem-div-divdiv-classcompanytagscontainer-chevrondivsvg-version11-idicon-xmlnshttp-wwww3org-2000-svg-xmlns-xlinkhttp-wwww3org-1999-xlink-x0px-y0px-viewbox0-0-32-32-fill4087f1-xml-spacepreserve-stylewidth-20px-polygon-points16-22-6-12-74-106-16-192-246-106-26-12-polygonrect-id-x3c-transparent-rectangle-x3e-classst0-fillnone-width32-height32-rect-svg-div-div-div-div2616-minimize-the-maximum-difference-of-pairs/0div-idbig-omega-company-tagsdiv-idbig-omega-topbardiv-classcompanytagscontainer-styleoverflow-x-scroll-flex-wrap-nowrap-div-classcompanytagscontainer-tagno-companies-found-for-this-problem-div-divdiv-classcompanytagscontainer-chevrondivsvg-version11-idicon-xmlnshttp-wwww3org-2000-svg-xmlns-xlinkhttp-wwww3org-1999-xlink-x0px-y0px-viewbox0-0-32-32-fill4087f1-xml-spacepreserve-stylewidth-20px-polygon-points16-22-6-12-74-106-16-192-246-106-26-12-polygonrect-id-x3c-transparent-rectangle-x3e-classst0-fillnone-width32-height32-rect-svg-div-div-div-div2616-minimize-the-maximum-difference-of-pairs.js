/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);
    let l = 0, r = nums[nums.length - 1];
    let res = Math.pow(10 , 9);
    while( l <= r){
        let m =  l + Math.floor((r - l)/ 2);
        if(isValid(m, nums, p)){
            res = m;
            r = m - 1;
        }else l = m + 1;
    }
    return res;
    
};

var isValid = (t, nums, p) => {
    let i = 1, count = 0;
    while(i < nums.length){
        if(nums[i] - nums[i - 1] <= t){
            count++;
            i = i + 2;
        } else i++;
        // if(count == p) return true;
    }
    return count>=p;;
    
}
// function isValid(maxDiff, nums, p, ){
//     let n = 0;
//     for(let i=1; i<nums.length; i++){
//         if(nums[i]- nums[i-1] <= maxDiff){
//             n++;
//             i++;
//         }
//     }
//     return n>=p;
// }



// ----------------------------
// var minimizeMax = function(nums, p) {
//     nums.sort((x,y)=>x-y);
//     let l=0,r=nums[nums.length-1]-nums[0];

//     while(l<r){
//         let m = Math.trunc((l+r)/2);
//         if(numsPairs(nums,m)>=p)
//             r=m;
//         else
//             l=m+1;
//     }

//     return l;

//     function numsPairs(nums,maxDiff){
//         let pairs = 0;
//         for(let i=1;i<nums.length;i++){
//             if(nums[i]-nums[i-1]<=maxDiff){
//                 pairs++;
//                 i++;
//             }
//         }
//         return pairs;
//     }
// };