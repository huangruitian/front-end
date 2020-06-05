/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let len = nums.length + 1
  this.sumArr = Array(len)
  this.sumArr[0] = 0
  // 前缀和
  for(let i = 0; i < len - 1; i++){
    this.sumArr[i + 1] = this.sumArr[i] + nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  // 返回前缀和
  return this.sumArr[j + 1] - this.sumArr[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

