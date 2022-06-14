/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  console.log('address', address.replace('.', '[.]')) 
    let result = ''
    for(char of address){
        console.log('a',char)
        if(char == '.') {result += '[.]'}
        else {result += char}
    }
    console.log('result', result)
    return result;
};