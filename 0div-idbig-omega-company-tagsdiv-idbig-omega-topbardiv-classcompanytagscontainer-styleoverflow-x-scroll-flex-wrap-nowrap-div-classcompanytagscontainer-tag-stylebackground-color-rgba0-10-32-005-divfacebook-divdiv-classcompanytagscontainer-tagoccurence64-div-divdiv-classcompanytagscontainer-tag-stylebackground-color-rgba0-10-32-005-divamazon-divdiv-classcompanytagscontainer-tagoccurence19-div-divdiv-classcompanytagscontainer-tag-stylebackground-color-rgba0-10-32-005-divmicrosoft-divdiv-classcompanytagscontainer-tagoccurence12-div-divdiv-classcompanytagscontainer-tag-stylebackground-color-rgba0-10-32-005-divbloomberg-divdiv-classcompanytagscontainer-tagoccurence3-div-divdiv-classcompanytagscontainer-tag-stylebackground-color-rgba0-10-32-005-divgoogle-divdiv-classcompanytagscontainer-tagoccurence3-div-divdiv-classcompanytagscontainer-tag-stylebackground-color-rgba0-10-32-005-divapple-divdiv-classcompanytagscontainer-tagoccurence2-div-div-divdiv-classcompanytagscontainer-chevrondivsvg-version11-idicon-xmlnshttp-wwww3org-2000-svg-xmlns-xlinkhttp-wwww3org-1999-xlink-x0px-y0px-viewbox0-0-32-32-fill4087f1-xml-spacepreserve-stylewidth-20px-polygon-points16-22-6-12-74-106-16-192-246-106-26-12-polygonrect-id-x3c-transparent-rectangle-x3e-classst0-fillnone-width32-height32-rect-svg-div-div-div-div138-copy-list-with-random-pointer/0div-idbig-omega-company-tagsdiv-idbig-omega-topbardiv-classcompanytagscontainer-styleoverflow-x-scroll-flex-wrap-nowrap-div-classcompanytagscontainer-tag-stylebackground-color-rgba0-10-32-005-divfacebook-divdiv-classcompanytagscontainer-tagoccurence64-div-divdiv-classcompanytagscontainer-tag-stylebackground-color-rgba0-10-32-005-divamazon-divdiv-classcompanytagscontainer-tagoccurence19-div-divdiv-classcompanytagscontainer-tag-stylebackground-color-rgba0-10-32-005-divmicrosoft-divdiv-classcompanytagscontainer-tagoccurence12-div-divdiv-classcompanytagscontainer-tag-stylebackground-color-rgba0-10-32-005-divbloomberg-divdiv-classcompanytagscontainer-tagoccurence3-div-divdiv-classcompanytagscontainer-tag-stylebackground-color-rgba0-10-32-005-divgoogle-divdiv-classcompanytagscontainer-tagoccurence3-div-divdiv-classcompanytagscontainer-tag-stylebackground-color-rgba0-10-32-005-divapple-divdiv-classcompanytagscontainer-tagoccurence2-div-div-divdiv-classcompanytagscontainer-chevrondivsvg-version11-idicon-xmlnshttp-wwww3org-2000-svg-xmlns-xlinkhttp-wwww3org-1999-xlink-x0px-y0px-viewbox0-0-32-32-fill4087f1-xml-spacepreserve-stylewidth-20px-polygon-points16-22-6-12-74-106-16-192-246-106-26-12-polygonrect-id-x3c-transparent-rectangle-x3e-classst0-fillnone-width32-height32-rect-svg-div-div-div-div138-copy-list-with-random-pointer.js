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
// var copyRandomList = function(head, map = new Map()) {
//     if (!head) return null;
//     if (map.has(head)) return map.get(head);

//     const clone = new Node(head.val);

//     map.set(head, clone);                           /*           | Space O(N) */
//     clone.next = copyRandomList(head.next, map);    /* Time O(N) | Space O(N) */
//     clone.random = copyRandomList(head.random, map);/* Time O(N) | Space O(N) */

//     return clone;
// }


var copyRandomList = function(head) {
    let map = new Map();
    let curr = head;
    while(curr){
        let copy = new Node(curr.val);
        map.set( curr, copy);
        curr = curr.next;
    }
    curr = head;
    while(curr){
        let copy =  map.get(curr);
        if(copy){
            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null;
        }

        curr = curr.next
    }
    console.log('map',map)
   return  map.get(head)
    
   
}