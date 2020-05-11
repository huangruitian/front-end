/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  buildMaxHeap(nums);
  heapSort(nums);
  // console.log(nums)
  return nums[k - 1];
};

function heapSort(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    swap(nums, i, 0);
    heapify(nums, 0, i);
  }
}

function buildMaxHeap(nums) {
  let len = nums.length;
  // 最后一个父节点开始，往上 heapify 操作
  for (let i = (len - 2) >> 1; i >= 0; i--) {
    heapify(nums, i, len);
  }
}

function heapify(nums, i, len) {
  if (i >= len) return;
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let max = i;
  if (left < len && nums[left] < nums[max]) {
    max = left;
  }
  if (right < len && nums[right] < nums[max]) {
    max = right;
  }
  if (max != i) {
    swap(nums, i, max);
    heapify(nums, max, len);
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// @lc code=end
