/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const portion = path.split("/");
    for (let p of portion){
        if (p === ".."){
            if (stack.length > 0){
                stack.pop();
            }
        }
        else if (p === "." || p == ""){
            continue;
        }
        else{
            stack.push(p);
        }
    }
    if (stack.length == 0) return "/";
    else{
        return "/" + stack.join("/");
    }
};