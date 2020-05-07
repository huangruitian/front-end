/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    if(nums.length == 1) {
        return new TreeNode(nums[0]);
    }
    let mid = nums.length >> 1
    let root = new TreeNode(nums[mid])
    // 脑子不要进递归，递归符合人脑思维。
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root 
};
// @lc code=end

