/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let res = []
    if (!root) return res;
    DFS(root, [], sum)
    return res;
    // DFS 
    function DFS(root, temp, sum) {
        sum -= root.val;
        temp.push(root.val)
        if (!root.left && !root.right && !sum) {
            res.push(temp)
            return;
        }
        if(root.left){
            DFS(root.left, [...temp], sum)
        }
        if(root.right){
            DFS(root.right, [...temp], sum)
        }
    }
};

// @lc code=end