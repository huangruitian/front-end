/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 18:25:35
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 18:25:41
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
  let temp = new ListNode(null)
  let res = temp
  let limt = 0 //进位
  let sum = 0  //求和
  while(l1 || l2){ //只要有一个指针存在就满足条件了
      let a = l1 != null ? l1.val : 0
      let b = l2 != null ? l2.val : 0
      sum = (a + b + limt) //求和
      limt = Math.floor( sum / 10 ) //求商, 进位
      temp.next = new ListNode(sum % 10) //求余，本位
      temp = temp.next
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
  }
  if(limt !== 0){
      temp.next = new ListNode(limt)
  }
  return res.next
};
// @lc code=end

