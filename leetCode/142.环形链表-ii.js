/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 16:25:16
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 17:03:48
 */
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null
  let fast = head.next.next
  let slow = head
  //1.快慢指针先看看链表有没有环
  while (slow != fast) {
    if(fast === null || fast.next === null){
      return null
    }
    slow = slow.next
    fast = fast.next.next
  }
  //2.获取链表长度，此时slow在最后面计算下它的长度即可
  let len = 1
  let temp = slow
  slow = slow.next
  while(temp != slow){
    len++
    slow = slow.next
  }
  // 先让慢指针走len步，然后再一起一步步走，再次相遇就是入口了
  fast = head
  slow = head
  while (len > 0) {
    slow = slow.next
    len--
  }
  //上面确保有环了，然后再一起一步步走
  while (slow != fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
};
// @lc code=end