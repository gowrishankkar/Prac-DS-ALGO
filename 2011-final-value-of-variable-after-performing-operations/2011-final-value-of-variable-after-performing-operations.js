/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    console.log('operations', operations)
    operations.forEach((operation)=>{
        if(operation == '--X' || operation == 'X--'){
            result--;
        } else if(operation == '++X' || operation == 'X++'){
            result++;
        }
    })
    return result;
};