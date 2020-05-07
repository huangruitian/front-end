/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // 利用中序遍历找到两个节点
  let stack = [];
  let first = null;  //大的
  let secend = null; //小的
  let pre = new TreeNode(Number.MIN_SAFE_INTEGER)
  //模拟栈，左到底再出来
  //4 3 2 1, 想办法找到第一个数和第二个数然后互换
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!first && pre.val > root.val) {
        first = pre;
    }
    if (first && pre.val > root.val) {
        secend = root;
    }
    pre = root;
    root = root.right;
  }
  let temp = first.val
  first.val = secend.val
  secend.val = temp
};
// @lc code=end
