/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(A) {
    
    
//     envelopes.sort((a,b)=>{
//         if(a[0] === b[0]){
//             return a[1] - b[1]
//         } else {
//             return a[0] - b[0]
//         }
//     })
//     let dp = new Array(envelopes.length).fill(1);
//     let max = 1;
//     for(let i = 1; i<envelopes.length ; i++){
//         for(let j = 0; j<i;j++){
//              if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1] && dp[i] < dp[j] + 1) {
//                     dp[i] = dp[j] + 1;
//                 }
//         }
//          max = Math.max(max, dp[i]);
//     }
//     return max
    
    

    A.sort((a,b) => a[0] !== b[0] ? a[0]-b[0] : b[1]-a[1]);
    let list = [];
    
    for (let a of A) {
        if (!list.length) {
            list.push(a);
        }
        
        else if (list[list.length-1][1] < a[1]) {
            if (list[list.length-1][0] !== a[0]) {
                list.push(a);
            }
        }
        
        else {
            let i = 0;
            let j = list.length-1;
            
            while (i < j) {
                let mid = Math.floor((i+j)/2);
                
                if (list[mid][1] < a[1]) {
                    i = mid+1;
                }
                else {
                    j = mid;
                }
            }
            
            list[i] = a;
        }
    }
    
    return list.length;

};