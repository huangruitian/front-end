/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // let cur = head
    // let pre = null
    // let nex = null
    // while(cur){
    //   nex = cur.next
    //   cur.next = pre
    //   //下一个
    //   pre = cur
    //   cur = nex
    // }
    // return pre
    //递归写法比较简单
    if(!head || !head.next) return head
    let newHead = reverseList(head.next)
    let nex = head.next
    nex.next = head
    head.next = null
    return newHead
};
// @lc code=end

