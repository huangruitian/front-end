/*
 * @Description:
 * @Autor: hrt
 * @Date: 2019-11-27 15:19:43
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-27 15:33:19
 */
/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    // 1.找到要删除的节点了
    // 如果左子树为空，直接返回右子树的第一个
    // 如果右子树为空，直接返回左子树的第一个
    // 否则找到右子树的最小值，替换删除掉
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let min = findMin(root.right);
      root.val = min.val;
      root.right = deleteNode(root.right, min.val);
    }
  }
  return root;
};
//找一个最小的节点
function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
// @lc code=end
