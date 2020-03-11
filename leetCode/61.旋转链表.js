/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 1.求出链表的长度len
    // 2.offset = k%len取余就是我们要右移的距离。
    // 3.找到倒数第offset个位置。可以使用双指针法。
    // 4.记录慢指针的next节点，这就是最后要返回的节点。
    if(!head) return head
    let len = 0
    let cur = head
    while(cur){
        len++
        cur = cur.next
    }
    
    let offset = k % len
    if(offset === 0){
        return head
    }

    let fast = head
    let slow = head
    while(offset > 0){
        fast = fast.next
        offset--
    }
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    //记录一下返回的新头结点
    cur = slow.next
    //断开
    slow.next = null
    //尾接头
    fast.next = head
    return cur
};
// @lc code=end

