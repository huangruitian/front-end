/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  function dfs(node) {
    if (node === null) {
      res.push(null);
      return;
    } else {
      res.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
  }
  dfs(root);
  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  function dfs() {
    if (data.length === 0) {
      return null;
    }
    let val = data.shift();
    if (val === null) {
      return null;
    }
    let node = new TreeNode(val);
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
