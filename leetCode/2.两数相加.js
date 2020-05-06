/*
 * @Description:
 * @Autor: hrt
 * @Date: 2019-11-25 18:25:35
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 18:25:41
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(null);
  let temp = res;
  let limit = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = limit + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    limit = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (limit != 0) {
    temp.next = new ListNode(limit);
  }
  return res.next;
};
// @lc code=end
