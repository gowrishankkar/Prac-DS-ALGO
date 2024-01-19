/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {

    let length = 0;

    let curr = head;

    while (curr) {
        length++;
        curr = curr.next;
    }

    const dummy = new ListNode(0);
    dummy.next = head;

    for (var step = 1; step < length; step *= 2) {  //har len ki ll split and merge

        let curr = dummy.next;
        let tail = dummy;

        while (curr) {
            const oh = curr;
            const b = split(oh, step);      //oh->      ..end    b->
            curr = split(b, step);        //b-->       ..end    curr(updated for nextone)

            tail = merge(oh, b, tail);   //oh->      ..end    //b-->       ..end 
        }


    }

    return dummy.next


};
const merge = function (left, right, tail) {

    let temp = tail;

    while (left && right) {
        if (left.val < right.val) {
            temp.next = left;
            left = left.next;
        } else {
            temp.next = right;
            right = right.next;
        }
        temp = temp.next;
    }

    //if some extra left add it  
    if (left) {
        temp.next = left
    }
    if (right) {
        temp.next = right
    }


    //now to go to end will return tails of merged sorted 2 list
    while (temp.next)
        temp = temp.next;

    return temp;  
};


const split = function (head, step) {

    if (head === null)
        return null;

    for (let i = 1; i < step && head.next; i++) {
        head = head.next;
    }

    const nexthead = head.next;
    head.next = null;
    return nexthead;  //return nexthead of this split list
};