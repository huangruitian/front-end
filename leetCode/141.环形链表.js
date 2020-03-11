/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 18:06:09
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 18:08:16
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head
    let fast = head
    while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
      if(slow == fast){
        return true
      }
    }
    return false
};
// @lc code=end

