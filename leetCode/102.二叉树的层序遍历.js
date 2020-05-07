/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  let queue = [root];
  let len = 0;
  let res = [];
  if (!root) return res;
  while (queue.length) {
    len = queue.length;
    let item = [];
    while (len > 0) {
      len--;
      let curNode = queue.shift();
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
      item.push(curNode.val);
    }
    if (item.length) {
      res.push(item);
    }
  }
  return res;
};
// @lc code=end
