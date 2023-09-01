var removeKdigits = function(num, k) {
    var stack=[];

    for(let i of num){
        while(stack.length>0 && k>0 && stack[stack.length-1]>i){
            stack.pop();
            k-=1
        }
        stack.push(i)
    }

    for(let j=0;j<k;j++) stack.pop();
    if(stack.length==0) return "0"
    while(stack[0]==0 && stack.length>1){ stack.shift();}
    return stack.join('')
};