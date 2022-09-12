/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     const map=new Map();
    for(let num of nums){
        if(map.get(num)){
            if(map.get(num)===2){
                map.delete(num)
            }map.set(num,2)
        }else{
            map.set(num,1)
        }
    }
    for(let [key,value] of map){
        if(value==1){
            return key;
        }
    }
};