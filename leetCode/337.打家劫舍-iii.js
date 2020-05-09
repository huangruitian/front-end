/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  const bst = (node) => {
    let cur = [0, 0]
    if(!node) return cur;
    let left = bst(node.left),
        right = bst(node.right);
    // 当前node没偷, 就是之前的最大值
    cur[0] = Math.max(...left) + Math.max(...right);
    // 当前点偷了的最大值 = 它的左右节点没有偷的最大值加上当前点的值
    cur[1] = left[0] + right[0] + node.val
    return cur
  }
  const ans = bst(root);
  return Math.max(...ans)
};
// @lc code=end

