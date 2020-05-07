/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length || !preorder.length) {
        if (inorder.length) {
            return new TreeNode(inorder[0])
        }
        if (preorder.length) {
            return new TreeNode(preorder[0])
        }
        return null
    } else {
        let node = preorder.shift()     //根
        let idx = inorder.indexOf(node) //根在中序遍历的位置
        let root = new TreeNode(node)   //新根
        let left_inorder = inorder.slice(0, idx)
        let right_inorder = inorder.slice(idx + 1)

        let left_pre = preorder.splice(0, left_inorder.length)
        let right_pre = preorder

        root.left = buildTree(left_pre, left_inorder)
        root.right = buildTree(right_pre, right_inorder)
        return root
    }
};
// @lc code=end