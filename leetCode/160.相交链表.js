/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 17:04:40
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 17:12:02
 */
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 先计算出两个链表的长度
    // 长的先走差的绝对值
    // 然后再一起走就行了
    let long = headA
    let short = headB
    let aLen = 0
    let bLen = 0
    while(long){
      aLen++
      long = long.next
    }
    while(short){
      bLen++
      short = short.next
    }
    long = aLen > bLen ? headA : headB
    short = aLen > bLen ? headB : headA
    let abs = Math.abs(aLen - bLen)
    while(abs > 0){
      abs--
      long = long.next
    }
    while(long != short){
      long = long.next
      short = short.next
    }
    return short
};
// @lc code=end

