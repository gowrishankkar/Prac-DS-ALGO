/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function(n, k) {
//     const res = [];
//     const track = [];
    
//     const backtrack = (n, k, start)=>{
//         if(track.length === k){
//             res.push(track.slice());
//             return
//         }
        
//         if(track.length > k) return;
//         for(let i = start; i <= n; i++){
//             track.push(i);
//             backtrack(n,k,i+1);
//             track.pop();
//         }
//     }
    
//     backtrack(n, k, 1);
    
//     return res;
// };

var combine = function (n, k) {
    let ans = [];
    const helper = (index, pairs, n, k) => {
        if (pairs.length === k) {
            ans.push([...pairs]);
            return
        }
        for (let i = index; i <= n; i++) {
            pairs.push(i);
            helper(i + 1, pairs, n, k);
            pairs.pop();
        }
    }
    helper(1, [], n, k);
    return ans;
};