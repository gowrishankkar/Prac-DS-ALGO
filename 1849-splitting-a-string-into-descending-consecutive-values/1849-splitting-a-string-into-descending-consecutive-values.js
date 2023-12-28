/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
    var len = s.length
    var dfs = (pre, s1)=>{
        if(s1==''){
            return true
        }
        if(pre==null){
            for(var i=1; i<len; i++) {
                var nxtS = s1.slice(0,i)
                if(dfs(+nxtS, s1.slice(i))){
                    // console.log(i)
                    return true
                }
            }
        }else{
            for(var i=1; i<len; i++) {
                var nxtS = s1.slice(0,i)
                var curN = +nxtS
                if(curN==pre-1) {
                    if(dfs(curN, s1.slice(i))){
                        return true
                    }
                }
                
            }
        }
        return false
    }
    return dfs(null,s)
};