/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let a=0,b=0,c=0,count=0;
    for(let i=0,j=0;i<s.length;i++){
        if(s[i]=='a'){
            a++;
        }else if(s[i]=='b'){
            b++;
        }else{
            c++;
        }
        while(a&&b&&c){
            count+=s.length-i;
            if(s[j]=="a"){
                a--;
            }else if(s[j]=="b"){
                b--;
            }else{
                c--;
            }
            j++;
        }
        
    }
    return count;
};