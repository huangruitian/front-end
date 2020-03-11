/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 17:54:25
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 17:54:34
 */
/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function(head) {
  let frist = new ListNode(null)
  let second = new ListNode(null)
  let temp = second
  let res = frist
  let i = 1 
  while(head){
      if(i % 2 === 0){
          second.next = new ListNode(head.val)
          second = second.next
      }else{
          frist.next = new ListNode(head.val)
          frist = frist.next
      }
      head = head.next
      i++
  }
  frist.next = temp.next
  return res.next
};
// @lc code=end

