/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size = 0;
    let node = head;
    while(node){
        size++;
        node =  node.next;
    }

    let result  = new ListNode();

    let list = result;

    let count = size - n; 

    for(let i = 1; i<=count; i++){
        list.next = new ListNode();
        list = list.next;
        list.val = head.val;
        head = head.next;
    }

    let temp = head.next;
    list.next = temp;
    result = result.next;
    return result;
};