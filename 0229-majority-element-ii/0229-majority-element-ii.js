/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = {};
    let arr = []
    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;
            
        
    }
    console.log('map', map)
    
    for (let n in map) {
     console.log('n', n)
            if (map[n] > nums.length / 3){
            console.log('map[n]', map[n])
                 arr.push(n);
        }
        
    }

    return arr
};