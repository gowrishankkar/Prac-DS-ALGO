/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


var copyRandomList = function(head) {
    let linked = new Node(0, null, null);
    let cur = head;
    let headPointer = head;
    let pointer = linked;
    let dict = [];
    let dict2 = []
    let i = 0;

    while (cur != null){
        dict.push(new Node(cur.val, null, null));
        dict2.push(cur)
        i+=1;
        cur = cur.next;

    }
    let j = 0;
    while (headPointer!=null){
        let rando = dict2.indexOf(headPointer.random);
        dict[j].random = rando
        headPointer = headPointer.next;
        j+=1

    }

    let head2 = dict.at(0);
    let p = 0;

    console.log(dict);
    while (p<dict.length-1){
        
        
        dict.at(p).next = dict.at(p+1);
        


        if (dict.at(p).random != -1){
            let val = dict.at(p).random;
            dict.at(p).random = dict.at(val);
        }
        else{
            dict.at(p).random = null;
        }
        p+=1
    }
    if (dict.length !=0){
        if (dict.at(-1).random != -1){
                let val = dict.at(-1).random;
                dict.at(-1).random = dict.at(val);
            }
        else{
                dict.at(-1).random = null;
        }
    }




    
    return head2;
    
    
    
};