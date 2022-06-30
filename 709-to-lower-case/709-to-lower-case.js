/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // return s.toLowerCase();

    
    // return s.toLocaleLowerCase();
    
    let res = [...s]
    .map(i => i.charCodeAt() >= 65 && i.charCodeAt() <= 90 
               ? String.fromCharCode(i.charCodeAt()+32) 
               : i)
    .join("");
  
  return res;
};