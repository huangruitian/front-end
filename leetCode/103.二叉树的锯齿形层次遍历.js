/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-28 16:24:12
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-28 16:24:35
 */
/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = []
  if (!root) return res;
  let i = 0;
  let queue = [root]
  let len = null
  let cur = null
  while (queue.length) {
    let temp = []
    len = queue.length
    while (len > 0) {
      len--
      cur = queue.shift()
      temp.push(cur.val)
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    i++
    if (i % 2 === 0) temp.reverse()
    res.push(temp)
  }
  return res
};
// @lc code=end