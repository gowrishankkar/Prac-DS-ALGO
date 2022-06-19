/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let resultArr = []
    // for(let i = s.length -1; i>=0; i--){
    //     console.log(i, s[i])
    //     resultArr.push(s[i])
    // }
    // console.log('resultArr', resultArr)
    // return resultArr;
    
      // let resultArr = [];
        // resultArr.push(reverseStringRe(resultArr, s))
    // let pointer = s.length-1
      
       // console.log('splitString', splitString, rev(splitString))
    
    // let splitString = [...s].join('') 
    // function reverse(str){
    //     if (str === "")
    //         return "";
    //     else
    //         return reverse(str.substr(1)) + str.charAt(0);
    // } 
    // console.log(reverse(splitString).split(''))
    // return reverse(splitString).split('')
    
    let i=0;
    let j=s.length-1;
    while(j>i){
        let temp1=s[i];
        console.log(temp1);
        let temp2=s[j];
        let transfer=temp1;
        temp1=temp2;
        delete s[j];
        s[j]=transfer;
        s[i]=temp1;
        i++;
        j--;
    }
    return s;
};

