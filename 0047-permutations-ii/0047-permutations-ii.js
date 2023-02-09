/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    let A = nums
			let ans = [];

		const gen = (curr, map, idx) => {
            
           if(idx === A.length) {
               ans.push(curr.slice())
               return;
           }
            
            console.log('map', map)
            Object.keys(map).forEach((key, index) => {
                console.log(`${key}: ${map[key]}`);
                
                if(map[key] > 0){
                curr[idx] = key;
                    map[key] = map[key] - 1
                    // console.log('i', key)
                    // console.log('idx', idx)
                    // console.log('curr', curr)
                    //   console.log('map', map)
                    gen(curr, map, idx + 1)
                    map[key] = map[key] + 1
                }
                
            });
//             for(let i = 0; i< Object.keys(map).length; i++){
//                 // console.log('map[A[i]]', map[A[i]])
//                 if(map[i] > 0){
                  
//                     curr[idx] = map[i];
//                     map[i] = map[i] - 1
//                     console.log('i', i)
//                     console.log('idx', idx)
//                     console.log('curr', curr)
//                       console.log('map', map)
//                     gen(curr, map, idx + 1)
//                     map[i] = map[i] + 1
//                     // curr.pop()
                    
//                 }
//             }
			
		}

		let curr = [];
		let index = 0
		let map = {}
		for(let i = 0; i<A.length; i++){
			map[A[i]] = (map[A[i]] || 0) +1
		}
		gen(curr, map, index)
		return ans
};

