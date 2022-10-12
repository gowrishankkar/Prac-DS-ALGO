/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
//     const map = {};
//     let arr = []
//     for (let n of nums) {
//         map[n] = (map[n] || 0) + 1;
            
        
//     }
//     console.log('map', map)
    
//     for (let n in map) {
//      console.log('n', n)
//             if (map[n] > nums.length / 3){
//             console.log('map[n]', map[n])
//                  arr.push(n);
//         }
        
//     }

//     return arr
//      let obj = {};
    
//     for (let i = 0; i < nums.length; i++){
//       if (!obj[nums[i]]){
//           obj[nums[i]] = 0;
//       }
//       obj[nums[i]]++;
//     }
    
//     let res = [];
//     for (let m in obj){
//       if (obj[m] > nums.length / 3){
//           res.push(parseInt(m));
//       }
//     }
//     return res;
    const map = {};
  const majEl = [];

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = nums[i] in map ? map[nums[i]] + 1 : 1;
  }

  Object.keys(map).map(key => {
    const n = nums.length / 3;
    if (map[key] > n || n < 1) {
      majEl.push(key);
    }
  });

  return majEl;
};