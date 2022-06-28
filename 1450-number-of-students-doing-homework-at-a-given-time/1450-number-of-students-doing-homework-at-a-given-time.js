/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let length = startTime.length;
    let result = 0;
    for(let i = 0; i < length; i++){
        // console.log('i', i)
            for(let j = startTime[i]; j <= endTime[i]; j++){
                 // console.log('j', j)
                if(j == queryTime){
                    result++
                }
            }
    }
    console.log('result', result)
    return result;
    
};