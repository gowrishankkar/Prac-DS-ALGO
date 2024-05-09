/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a);
    let x=0,ans=0;
    for(let i=0;i<k;i++){
        if(happiness[i]>x){
            ans+=happiness[i]-x;
            x++;
        }
    }
    return ans;
};