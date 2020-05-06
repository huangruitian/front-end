/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
   // 递归非常适合人脑思考写代码！！！ 
   if(!head) return head;
   let a, b;
   a = b = head
   for(let i = 0; i < k; i++){
     // 不足 k 个，不需要反转，base case
     if (b == null) return head;
     b = b.next;
   }
   // 反转前 k 个元素
   let newHead = reverse(a, b)
   // 递归反转后续链表并连接起来
   a.next = reverseKGroup(b, k)
   // 返回新头
   return newHead
};

/** 反转区间 [a, b) 的元素，注意是左闭右开 */
function reverse(a, b){
   let pre = null, cur = a, nxt = a;
   while(cur != b){
     // 先保留 nextNode    
     nxt = cur.next
     // 直接反转
     cur.next = pre
     // 当前的变成前一个 
     pre = cur
     // 下一个变成当前的  
     cur = nxt
   }
   return pre
}
// @lc code=end

