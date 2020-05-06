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
  // 1.先跑一遍得到长度，然后删除倒数第N个
  // 2.快慢指针
  let res = new ListNode(null)
  res.next = head
  let fast = res
  let slow = res
  while(n){
    fast = fast.next
    n--
  }
  // [1] 1
  while(fast && fast.next){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return res.next
};
// @lc code=end