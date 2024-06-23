/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
function removeSmaller(arr, item){
    while(arr.length > 0 && arr[arr.length - 1] < item){
        arr.pop();
    }
    arr.push(item)
    return arr;
}

function removeBigger(arr, item){
    while(arr.length > 0 && arr[arr.length - 1] > item){
        arr.pop();
    }
    arr.push(item);
    return arr;
}

var longestSubarray = function(nums, limit) {
    const [mind, maxd] = [[], []];
    let [i, j] = [0, 0];
    for(;j < nums.length; j++){
        const last = nums[j];
        removeSmaller(maxd, last);
        removeBigger(mind, last);
        if(maxd[0] - mind[0] > limit){
            const first = nums[i];
            if(maxd[0] === first) maxd.shift(); 
            if(mind[0] === first) mind.shift();
            i++;
        }
    }
    return j - i;
};