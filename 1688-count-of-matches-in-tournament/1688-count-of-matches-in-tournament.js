/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let result = 0;
    let teams = n;
    while(Math.floor(teams/2) > 0){
        if(teams%2 === 0){
            result+=(Math.floor(teams/2));
            teams=Math.floor(teams/2)
        }else {
            result+=Math.floor((teams - 1) /2);
            teams= 1+Math.floor((teams - 1)/2)
        }
    }
    return result
};