/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-06 18:06:01
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-06 18:10:26
 */
/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let res = 0
  let dfs = (root, temp) => {
    if (!root) return;
    temp += root.val
    if (!root.left && !root.right) {
      //console.log(parseInt(temp, 2))
      res += parseInt(temp, 2)
    }
    dfs(root.left, temp)
    dfs(root.right, temp)
  }
  dfs(root, '')
  return res
};
// @lc code=end