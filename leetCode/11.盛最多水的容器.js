/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1
  let h = 0
  let result = 0
  while(r>l){
    h = Math.min(height[l], height[r])
    result = Math.max((r - l) * h, result)
    if(height[r] == h){
       r--
    }else{
       l++
    }

    // h = height[l] < height[r] ? height[l++] : height[r--]
    // 不管是左边收敛还是右边，宽度都会减少1，所有要加回来
    // result = Math.max((r - l + 1) * h, result)
  }
  return result
};
// @lc code=end

