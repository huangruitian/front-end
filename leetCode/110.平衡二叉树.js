/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    // 1.base case 空树也是平衡的
    if(!root) return true
    // 2.process 
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    // 3.call self
    // 如果左右子树的高度绝对值小于2，就是平衡的
    // 细想一下树的结构，我们是要让所有的左右子树都平衡
    // 所以总的条件就是以下
    return Math.abs(leftHeight - rightHeight) < 2 &&
    isBalanced(root.left) && isBalanced(root.right);
};
function getHeight(root) {
  if(!root) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
} 

// @lc code=end