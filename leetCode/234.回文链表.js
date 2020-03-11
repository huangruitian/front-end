/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 17:47:44
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 17:58:32
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 先检测链表长度
  // 再从中间开始？
  // 思路：此题基本思路就是讲链表分为两段，并且把前面一段进行倒置，
  // 然后再比较前后两段是否相同即可
  if (head == null || head.next == null) {
    return true;
  }
  let slow = head,
    fast = head;
  let pre = head,
    prepre = null;
  while (fast != null && fast.next != null) {
    pre = slow;
    slow = slow.next; //慢指针走一步
    fast = fast.next.next; //快指针走两步
    pre.next = prepre;
    prepre = pre;
  }
  if (fast != null) {
    slow = slow.next;
  }
  while (pre != null && slow != null) {
    if (pre.val != slow.val) {
      return false;
    }
    pre = pre.next;
    slow = slow.next;
  }
  return true;
};
// @lc code=end