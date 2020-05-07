/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function (root) {
    let pre = null;
    const f = root => {
        if (!root) return;
        // 前序：注意更新last节点，包括更新左右子树
        if (pre) pre.left = null, pre.right = root;
        pre = root;
        // 前序：注意备份右子节点，规避下一节点篡改
        const tmp = pre.right;
        f(pre.left);
        f(tmp);
    }
    f(root);
};
// @lc code=end