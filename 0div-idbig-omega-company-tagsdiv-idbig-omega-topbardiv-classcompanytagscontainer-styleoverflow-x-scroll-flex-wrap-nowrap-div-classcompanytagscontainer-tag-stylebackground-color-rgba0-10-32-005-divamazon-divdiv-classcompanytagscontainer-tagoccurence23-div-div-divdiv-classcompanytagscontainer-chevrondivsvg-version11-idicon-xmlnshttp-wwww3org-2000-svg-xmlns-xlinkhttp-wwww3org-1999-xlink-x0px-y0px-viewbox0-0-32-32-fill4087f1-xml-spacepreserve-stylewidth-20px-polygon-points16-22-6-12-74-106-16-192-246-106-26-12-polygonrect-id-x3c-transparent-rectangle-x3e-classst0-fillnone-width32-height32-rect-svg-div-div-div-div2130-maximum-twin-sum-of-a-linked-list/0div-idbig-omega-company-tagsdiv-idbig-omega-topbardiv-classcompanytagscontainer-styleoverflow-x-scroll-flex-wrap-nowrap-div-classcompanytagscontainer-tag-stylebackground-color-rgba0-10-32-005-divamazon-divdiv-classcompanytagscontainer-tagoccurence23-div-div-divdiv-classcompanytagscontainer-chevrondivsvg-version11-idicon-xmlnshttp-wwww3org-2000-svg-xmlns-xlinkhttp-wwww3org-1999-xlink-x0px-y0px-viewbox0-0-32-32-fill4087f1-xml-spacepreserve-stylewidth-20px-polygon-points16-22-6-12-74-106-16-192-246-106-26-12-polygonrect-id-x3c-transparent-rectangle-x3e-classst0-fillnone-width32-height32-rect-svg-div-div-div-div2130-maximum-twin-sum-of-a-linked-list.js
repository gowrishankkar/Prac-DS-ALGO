/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// var pairSum = function (head) {
//   let stack = [];

//   let tmp = head;
//   let count = 0,
//     length = 0,
//     ans = 0;

//   while (tmp) {
//     length++;
//     tmp = tmp.next;
//   }

//   tmp = head;

//   while (count++ != length / 2) {
//     stack.push(tmp.val);
//     tmp = tmp.next;
//   }

//   while (count++ <= length) {
//     var curr = stack.pop();
//     ans = Math.max(ans, curr + tmp.val);
//     tmp = tmp.next;
//   }

//   return ans;
// };



var pairSum = function (head) {
  let stack = [], ans = 0;
    let [slow, fast] = [head, head]
      while (fast &&  fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
      }
    // console.log('stack', stack, slow)
      while (stack.length && slow ) {
        var curr = stack.pop();
        ans = Math.max(ans, curr + slow.val);
        slow = slow.next;
      }

  return ans;
};