/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //二叉树的层次遍历，实际上就是BFS
    let res = []
    if(!root) return res;
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let leve = []
        while(len-- > 0){
            let cur = queue.shift()
            leve.push(cur.val)
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        res.push(leve)
    }
    return res;
};
// @lc code=end

