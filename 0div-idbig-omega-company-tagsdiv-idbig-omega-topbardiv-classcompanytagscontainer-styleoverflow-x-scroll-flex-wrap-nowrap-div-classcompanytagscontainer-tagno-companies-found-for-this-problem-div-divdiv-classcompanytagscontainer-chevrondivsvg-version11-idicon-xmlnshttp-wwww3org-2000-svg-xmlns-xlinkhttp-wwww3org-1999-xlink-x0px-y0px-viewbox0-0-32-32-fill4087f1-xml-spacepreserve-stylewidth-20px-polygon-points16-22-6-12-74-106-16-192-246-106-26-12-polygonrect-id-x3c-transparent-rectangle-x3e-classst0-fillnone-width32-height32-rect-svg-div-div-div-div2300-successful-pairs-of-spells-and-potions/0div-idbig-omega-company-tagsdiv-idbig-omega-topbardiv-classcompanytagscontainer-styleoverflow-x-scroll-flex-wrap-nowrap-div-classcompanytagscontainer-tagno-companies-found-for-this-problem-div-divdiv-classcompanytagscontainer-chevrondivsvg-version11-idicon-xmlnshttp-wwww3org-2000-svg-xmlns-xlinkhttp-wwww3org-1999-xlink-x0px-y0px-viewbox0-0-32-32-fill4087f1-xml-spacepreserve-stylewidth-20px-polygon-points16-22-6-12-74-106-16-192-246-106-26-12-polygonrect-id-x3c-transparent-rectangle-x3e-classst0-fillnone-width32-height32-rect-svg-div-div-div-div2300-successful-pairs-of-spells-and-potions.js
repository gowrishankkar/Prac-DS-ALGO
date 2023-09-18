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

var successfulPairs = function(spells, potions, success) {
    let res = [];
    let sp = potions.sort((a,b) => a-b);
    const test = (x) =>{
        let l = 0, r = sp.length - 1;
        const t = Math.ceil(success/x);
        while(l <= r){
            let mid = Math.floor((l+r)/2);
            if(sp[mid] == t){
                if(l == r) return l
                r = mid 
            }
            else if(sp[mid] > t) {
                r = mid - 1;
            } else  l = mid + 1
        }
        return l;
    }
    for(let i = 0;i < spells.length; i++){
        res.push(potions.length - test(spells[i]))
    }
    return res;
};

