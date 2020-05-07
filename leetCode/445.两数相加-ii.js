/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
  let len1 = 0,
      len2 = 0;
  let temp1 = l1, temp2 = l2;
  while (temp1) {
    len1++;
    temp1 = temp1.next;
  }
  while (temp2) {
    len2++;
    temp2 = temp2.next;
  }
  let longLink = len1 > len2 ? l1 : l2
  let shortLink = len1 > len2 ? l2 : l1
  let longLen = len1 > len2 ? len1 : len2
  let shortLen = len1 > len2 ? len2 : len1
  let res = new ListNode(null)
  temp1 = res
  while(longLink){
     //长的开始  
     longLen--; 
     if(longLen - shortLen <= 0){
      //段的也开始    
     }
     //相加逻辑  
  }
  return res.next
};
// @lc code=end
