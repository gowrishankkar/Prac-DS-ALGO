/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//   let set = new Set();
//   while (headA) {
//     set.add(headA);
//     headA = headA.next;
//   }
//   while (headB) {
//     if (set.has(headB)) return headB;
//     headB = headB.next;
//   }
//   return null;
// };



// var getIntersectionNode = function (headA, headB) {
//    let [n1, n2] = getDifference(headA ,headB);
//     if(n1 < n2) return getCollision(headB, headA, n2 - n1);
//     else return getCollision(headA, headB, n1 - n2);
// };

// function getCollision(A, B, n){
//     while(n != 0){
//         A = A.next;
//         n--;
//     }
//     while(A){
//         if(A == B) return A;
//         A = A.next;
//         B = B.next;
        
//     }
//     return null;
// }

// function getDifference(head1, head2){
//      let len1 = 0,len2 = 0;
//         while(head1 != null || head2 != null) {
//             if(head1 != null) {
//                 ++len1; head1 = head1.next;
//             }
//             if(head2 != null) {
//                 ++len2; head2 = head2.next;
//             }
            
//         }
//         return [len1,len2];
// }



var getIntersectionNode = function (headA, headB) {
  let A =  headA, B = headB;
    while(A != B){
        A = A == null ? headB : A.next;
        B = B == null ? headA : B.next;
    }
    return A;
};
