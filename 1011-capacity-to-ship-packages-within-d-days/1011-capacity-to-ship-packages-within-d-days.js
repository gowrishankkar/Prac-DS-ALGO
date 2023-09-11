/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l =  Math.max(...weights);
    let h = 0;
    weights.forEach((ele) => h += ele);
    
    while(l <= h) {
        let mid = l + Math.floor((h - l) / 2); 
        let noD =  filter(weights, mid);
        if(noD <= days) h = mid - 1;
        else l = mid + 1;
    }
    return l;
};

var filter = (w, m) => {
    let load = 0, days = 1;
    for(let i = 0; i < w.length ; i++){
        if(load + w[i] > m ){
            days++;
            load = w[i];
        }else load += w[i]
    }
    return days;
}