/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 16:45:45
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 17:02:28
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  //快指针先走n
  while (n > 0) {
    fast = fast.next
    n--
  }
  //如果n刚好是空，说明n等于链表长度
  if (!fast) return head.next
  let slow = head
  //快慢指针一起走
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  //删除
  slow.next = slow.next.next
  return head
};
// @lc code=end