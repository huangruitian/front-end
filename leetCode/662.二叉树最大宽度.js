/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let res = 0
    let queue = [root]
   while(queue.length){
      let len = queue.length
      let temp = []
      while(len){
        let cur = queue.shift()
        if(cur == null){
           temp.push('#') 
        }else{
           temp.push(cur.val)
           queue.push(cur.left)  
           queue.push(cur.right)
        } 
        len--
      }
      console.log(temp)
      if(temp.length){
        res = Math.max(res, getWidth(temp))  
      }
   }
   return res
};

function getWidth(temp){
  if(temp.length == 1) return 1;
  while(temp[0] == '#'){
    temp.shift()
  }
  while(temp[temp.length - 1] == '#'){
    temp.pop()
  }
  return temp.length
}
// @lc code=end

