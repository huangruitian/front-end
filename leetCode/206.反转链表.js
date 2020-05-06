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
//    if(!head || !head.next){
//        return head
//    }
//    // process
//    // 下一个同样是这样处理    
//    let newHead = reverseList(head.next)
//    let nextNode = head.next
//    nextNode.next = head
//    head.next = null
//    return newHead

    let pre = null, cur = head, nxt = head;
    while(cur != null){
    // 先保留 nextNode    
    nxt = cur.nxt
    // 直接反转
    cur.next = pre
    // 当前的变成前一个 
    pre = cur
    // 下一个变成当前的  
    cur = nxt
    }
    return pre
};
// @lc code=end

