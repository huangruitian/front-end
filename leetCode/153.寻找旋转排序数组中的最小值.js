/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //总结，这种问题适合用循环外输出，因为这样才能夹逼
    let left = 0
    let right = nums.length - 1      //因为right是要有效的取最后一位
    while(left < right){             //因为不知道是左边大还是右边大，所以循环外输出比较好
        let mid = (left + right) >>> 1
        if(nums[mid] > nums[right]){ //左边有序, 确定目标不在左边,在右边
             left = mid + 1
        }else{                       //右边有序, 确定不在右边
             right = mid
        }
    }
    return nums[left]
};
// @lc code=end

