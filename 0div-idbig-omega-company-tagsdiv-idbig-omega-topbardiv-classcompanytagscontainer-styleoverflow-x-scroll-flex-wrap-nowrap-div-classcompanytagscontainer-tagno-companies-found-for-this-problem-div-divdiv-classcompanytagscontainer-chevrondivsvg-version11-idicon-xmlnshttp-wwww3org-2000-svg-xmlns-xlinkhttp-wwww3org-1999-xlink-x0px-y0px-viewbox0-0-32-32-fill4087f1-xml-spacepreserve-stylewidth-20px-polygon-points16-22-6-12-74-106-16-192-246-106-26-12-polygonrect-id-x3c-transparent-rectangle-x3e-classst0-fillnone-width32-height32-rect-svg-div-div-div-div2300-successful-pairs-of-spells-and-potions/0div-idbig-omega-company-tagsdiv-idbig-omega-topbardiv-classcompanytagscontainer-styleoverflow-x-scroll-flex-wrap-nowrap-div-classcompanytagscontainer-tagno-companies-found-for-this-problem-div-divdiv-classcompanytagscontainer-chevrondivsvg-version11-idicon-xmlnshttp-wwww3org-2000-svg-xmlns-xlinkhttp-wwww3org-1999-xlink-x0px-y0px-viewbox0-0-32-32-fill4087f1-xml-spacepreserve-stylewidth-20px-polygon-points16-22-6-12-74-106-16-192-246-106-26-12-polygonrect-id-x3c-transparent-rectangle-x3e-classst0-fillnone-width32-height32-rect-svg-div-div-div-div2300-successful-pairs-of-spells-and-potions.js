/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// var successfulPairs = function(spells, potions, success) {
//     let res = [];
//     for(let i = 0;i < spells.length; i++){
//         let count = 0;
//         for(let j = 0; j < potions.length ; j++){
//             if(potions[j] * spells[i] >= success) count++;
//         }
//         res.push(count)
//     }
//     return res;
// };

// var successfulPairs = function(spells, potions, success) {
//     let res = [];
//     let sp = potions.sort((a,b) => a-b);
//     const test = (x) =>{
//         let l = sp[0], r = sp.length - 1;
//         const t = Math.ceil(success/x);
//         while(l <= r){
//             let mid = Math.floor((l+r)/2);
//             if(sp[mid] == t){
//                 if(l == r) return l
//                 r = mid 
//             }
//             else if(sp[mid] > t) {
//                 r = mid - 1;
//             } else  l = mid + 1
//         }
//         return l;
        
//     }
    
        
//     for(let i = 0;i < spells.length; i++){
//         res.push(potions.length - test(spells[i]))
//     }
    

//     return res;
// };

var successfulPairs = function(spells, potions, success) {
    const sortedPotions = potions.sort((a, b) => a-b);
    const pl = potions.length;
    function getSuccessIndex(s) {
        const r = Math.ceil(success/s);
        // binary search
        let i = 0, j = pl-1;
        while (i <= j) {
            const m = Math.floor((i+j)/2);
            if (sortedPotions[m] == r) {
                if (i == j) {
                    return i;
                }
                j = m;
            } else if (sortedPotions[m] > r) {
                j = m-1;
            } else {
                i = m+1;
            }
        }
        return i;
    }

    const re = [];
    for (const s of spells) {
        re.push(pl - getSuccessIndex(s));
    }
    return re;
};