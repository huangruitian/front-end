/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 17:21:27
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 17:44:31
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //多想想递归啊 兄弟！！
  // if(!head) return head
  // head.next = removeElements(head.next, val)
  // if(head.val === val){
  //     return head.next
  // }else{
  //     return head
  // }

  //迭代
  let res = new ListNode(null)
  res.next = head
  let prev = res
  let last = prev.next
  while (last) {
    if (last.val === val) {
      prev.next = last.next
    } else {
      prev = prev.next
    }
    last = prev.next
  }
  return res.next
};
// @lc code=end