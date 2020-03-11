/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 11:14:57
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 14:07:58
 */
/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  //先排序，双指针，大了右减，小了左加
  nums.sort((a, b) => a - b)
  let res = []
  //小于四个就不用比较了。因为是四数之和
  for (let i = 0; i < nums.length - 3; i++) {
    // if(nums[i] > target) break; //如果当前数有一个大于目标值，就可以提前退出来了
    //避免相同的, 但是要注意第一个可以
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    //三数之和
    for (let j = i + 1; j < nums.length - 2; j++) {
      //避免相同的, 但是要注意第一个可以  
      if(j > i + 1 && nums[j] === nums[j - 1]) continue;  
      let left = j + 1
      let right = nums.length - 1
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
        }
        if(sum <= target){
          while(nums[left] == nums[++left]){} //避免相同的 
        }else{
          while(nums[right] == nums[--right]){} //避免相同的 
        }
      }
    }
  }
  return res
};
// @lc code=end