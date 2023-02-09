/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsetsWithDup = function(nums) {
//      let A = nums
//        let result = []
//         A.sort((a, b) => a - b)
//         let subset = [];
//         const dfs = (subset, map, index) => {
//             result.push(subset.slice());

//             for (let i = 0; i < Object.keys(map).length; i++) {
//                 if()
//                 subset.push(A[i]);
//                 dfs(i + 1);
//                 subset.pop()
//             }

//         }
//         let map = {}
//         A.forEach(ele =>{
//             map[ele] = (map[ele] || 0) + 1
//         } )
//     console.log('map', map)
//         dfs(subset, , map, 0);
//         return result
// };


var subsetsWithDup = function(nums) {
   let res = []
   let A = nums
        A.sort((a, b) => a - b);
     
        function dfs(sub, idx) {
            if (idx == A.length) {
                res.push(sub.slice());
                return
            }

            sub.push(A[idx])
            dfs(sub, idx + 1);
            sub.pop();

            while(idx + 1 < A.length && A[idx] === A[idx + 1]) idx++;
            dfs(sub, idx +1)

            // for (let i = idx; i < A.length; i++) {
            //     sub.push(A[i])
            //     dfs(i + 1);
            //     sub.pop();

            // }
        }
       let sub = []
        console.log('res', res)
        dfs( sub, 0);
        return res
};

