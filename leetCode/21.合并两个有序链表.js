/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-22 17:31:46
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-25 15:53:25
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
  // let res = new ListNode(null);
  // let ret = res
  // let temp = 0; 
  // while(l1 && l2){
  //   if(l2.val > l1.val){
  //     temp = l1.val
  //     l1 = l1.next
  //   }else{
  //     temp = l2.val
  //     l2 = l2.next
  //   }
  //   res.next = new ListNode(temp)
  //   res = res.next
  // }
  // while(l1){
  //   res.next = new ListNode(l1.val)
  //   res = res.next
  //   l1 = l1.next
  // }
  // while(l2){
  //   res.next = new ListNode(l2.val)
  //   l2 = l2.next
  //   res = res.next
  // } 
  // // console.log(ret)
  // return ret.next

  // 递归写法
  if (l1 == null) {
    return l2;
  } else if (l2 == null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
// @lc code=end