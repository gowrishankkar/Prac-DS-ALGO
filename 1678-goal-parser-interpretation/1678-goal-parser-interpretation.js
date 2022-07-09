/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // let result = ''
    // for(let i in command){
    //     console.log('ele', command[i])
    //     if(command[i] == 'G') result =  result + 'G' ;
    //     if(command[i] == '(' && command[i+1] == ')') result =  result + 'o';
    //     if(command[i] == '(' && command[i+1] == 'a' && command[i+2] == 'l'&& command[i+3] == ')') result =  result + 'al';
    // }
    // console.log('result', result)
    let replacer = (match) => {
        if(match === '()') return 'o';
        else if(match === '(al)') return 'al';
		else return match;
	};
	return command.replace(/G|\(\)|\(al\)/g, replacer);
};