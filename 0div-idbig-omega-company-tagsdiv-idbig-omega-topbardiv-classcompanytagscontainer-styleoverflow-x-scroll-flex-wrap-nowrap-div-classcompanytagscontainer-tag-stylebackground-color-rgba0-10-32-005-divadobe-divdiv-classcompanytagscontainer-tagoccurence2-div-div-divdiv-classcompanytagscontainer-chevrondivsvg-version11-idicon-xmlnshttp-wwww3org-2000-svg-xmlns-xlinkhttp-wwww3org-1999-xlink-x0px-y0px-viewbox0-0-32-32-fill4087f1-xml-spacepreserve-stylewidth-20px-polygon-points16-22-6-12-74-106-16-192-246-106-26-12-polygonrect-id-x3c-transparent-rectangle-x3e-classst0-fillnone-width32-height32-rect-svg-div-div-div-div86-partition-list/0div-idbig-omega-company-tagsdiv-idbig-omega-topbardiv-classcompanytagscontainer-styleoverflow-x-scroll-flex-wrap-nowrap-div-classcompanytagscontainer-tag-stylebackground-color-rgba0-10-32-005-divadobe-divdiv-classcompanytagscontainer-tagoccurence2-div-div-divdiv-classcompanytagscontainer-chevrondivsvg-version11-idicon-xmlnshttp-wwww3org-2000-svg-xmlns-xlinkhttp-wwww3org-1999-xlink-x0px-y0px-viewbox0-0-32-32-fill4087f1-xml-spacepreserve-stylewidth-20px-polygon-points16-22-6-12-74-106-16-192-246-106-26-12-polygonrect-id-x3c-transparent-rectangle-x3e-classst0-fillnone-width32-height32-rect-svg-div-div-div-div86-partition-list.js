/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// const partition = (head, x) => {
//   const lessHead = new ListNode(), greaterEqualHead = new ListNode();
//   let lessP = lessHead, greaterEqualP = greaterEqualHead, curr = head;
//   while (curr) {
//     if (curr.val >= x) {
//       greaterEqualP.next = curr;
//       greaterEqualP = greaterEqualP.next;
//     } else {
//       lessP.next = curr;
//       lessP = lessP.next;
//     }
//     curr = curr.next;
//   }
//   lessP.next = greaterEqualHead.next;
//   greaterEqualP.next = null;
//   return lessHead.next;
// };

const partition = (head, x) => {
    const left = new ListNode(), right = new ListNode();
    let leftT = left, rightT = right;
    while(head){
        if(head.val >= x){
            rightT.next = head;
            rightT = rightT.next;
        }else {
            leftT.next = head;
            leftT = leftT.next;
        }
        head = head.next;
    }
    leftT.next = right.next;
    rightT.next = null;
    return left.next;
};

// var partition = function(head, x) {
//     let smallHead = new ListNode();
//     let small = smallHead;
//     let largeHead = new ListNode();
//     let large = largeHead;
//     while(head){
//         if(head.val < x){
//             small.next = head;
//             small = small.next;
//         }else{
//             large.next = head;
//             large = large.next;
//         }
//         head = head.next;
//     }
//     large.next = null;
//     small.next = largeHead.next;
//     return smallHead.next;
// };