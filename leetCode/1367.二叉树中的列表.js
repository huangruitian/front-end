/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的列表
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var dfs = function(rt, head) {
    if (head == null) return true;
    if (rt == null) return false;
    if (rt.val != head.val) return false;
    return dfs(rt.left, head.next) || dfs(rt.right, head.next);
}
var isSubPath = function(head, root) {
    if (root == null) return false;
    // 起点：当前，左子树，右子树
    return dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
};
// @lc code=end

