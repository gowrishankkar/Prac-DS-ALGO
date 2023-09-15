/**
 * @param {number} n
 * @return {number}
 */
// var arrangeCoins = function(n) {
//     let rowCount = 0;
//     let coins = n;
//     for(let i = 1; i <= n ; i++ ){
//       coins -= i;
//       coins >= 0 && rowCount++
//     }
//     return rowCount
// };
// var arrangeCoins = function(n) {
//     if(n===0) return 0;
//     for(let k=1; k<=n; k++){
//         if((k)*(k+1)<=2*n && (k+1)*(k+2)>2*n) return k;
//     }
// };

var arrangeCoins = function(n) {
    let l = 1 , r = n;
    let res = 0;
    while(l <= r){
        let mid = l + Math.floor((r - l) / 2);
        let coins = (mid / 2) * (mid + 1 );
        if(coins > n) r = mid - 1;
        else{
            l = mid + 1;
            res = Math.max(mid , res);
        }
        
    }
    return res;
};