/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 16:30:45
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-22 16:42:18
 */
/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
   node.val = node.next.val
   node.next = node.next.next
};
// @lc code=end

