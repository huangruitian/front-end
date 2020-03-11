/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-08-22 16:07:01
 * @LastEditors: hrt
 * @LastEditTime: 2019-10-29 16:21:35
 * ==================================>
 * 
 * 程序 = 算法 + 数据结构
 * 一、怎么学？（https://mp.weixin.qq.com/s/wnjsBeqBpnNTwbWCWcHTqg）
 * 1.要做一个全方位的了解
 * 2.分类练习
 * 3.定期回顾和总结
 * 4.题目的选择(leet code 简单中等难点即可)
 * 二、时间复杂度和空间复杂度
 * 1.时间复杂度（ O(1) < O(log(n)) < O(n) < O(nlog(n)) < O(n^2) < O(2^n) < O(n!)）
 * 2.空间复杂度一般和时间复杂度差不多
 * 三、数据结构（数据结构即数据元素相互之间存在的一种和多种特定的关系集合。）
 * 1.逻辑结构
 *   简单的来说逻辑结构就是数据之间的关系，逻辑结构大概统一的可以分成两种：线性结构、非线性结构。
 *   常用的线性结构有: 栈，队列，链表，线性表。(首尾相接的)
 *   常见的非线性结构有 二维数组，树等。
 * 2.存储结构
 *   逻辑结构指的是数据间的关系，而存储结构是逻辑结构用计算机语言的实现。
 *   常见的存储结构有顺序存储、链式存储、索引存储以及散列存储。
 *   例如: 数组在内存中的位置是连续的，它就属于顺序存储；
 *         链表是主动建立数据间的关联关系的，在内存中却不一定是连续的，它属于链式存储；
 *         还有顺序和逻辑上都不存在顺序关系，但是你可以通过一定的方式去放问它的哈希表，数据散列存储。
 * 四、常用的数据结构
 * 1、树（树是不包含圈的图，二叉树很重要）。
 * 2、链表（单链双链）
 * 3、数组（有序的线性存储）
 * 4、栈（先进后出）
 * 5、队列（先进先出）
 * 6、哈希表（数组 + hash随机值函数）
 * 7、堆（底层是完全二叉树）
 * 8、图（有向图和无向图）（https://www.jianshu.com/p/bce71b2bdbc8）
 *                =====>（http://www.conardli.top/docs/）
 */
// 解题：问题的抽象->数学建模->动态的输入

// 第一个，最基本的二分查找算法：
// 因为我们初始化 right = nums.length - 1
// 所以决定了我们的「搜索区间」是 [left, right]
// 所以决定了 while (left <= right)
// 同时也决定了 left = mid+1 和 right = mid-1
// 因为我们只需找到一个 target 的索引即可
// 所以当 nums[mid] == target 时可以立即返回
// 代码：
// int left = 0; 
// int right = nums.length - 1; // 注意
// while(left <= right) {
//     int mid = (right + left) / 2;
//     if(nums[mid] == target)
//         return mid; 
//     else if (nums[mid] < target)
//         left = mid + 1; // 注意
//     else if (nums[mid] > target)
//         right = mid - 1; // 注意
//     }
// return -1;


// 第二个，寻找左侧边界的二分查找：
// 因为我们初始化 right = nums.length
// 所以决定了我们的「搜索区间」是 [left, right)
// 所以决定了 while (left < right)
// 同时也决定了 left = mid + 1 和 right = mid

// 因为我们需找到 target 的最左侧索引
// 所以当 nums[mid] == target 时不要立即返回
// 而要收紧右侧边界以锁定左侧边界
// 代码：
// int left = 0;
// int right = nums.length; // 注意
// while (left < right) { // 注意
//     int mid = (left + right) / 2;
//     if (nums[mid] == target) {
//         right = mid;
//     } else if (nums[mid] < target) {
//         left = mid + 1;
//     } else if (nums[mid] > target) {
//         right = mid; // 注意
//     }
// }
// return left;


// 第三个，寻找右侧边界的二分查找：
// 因为我们初始化 right = nums.length
// 所以决定了我们的「搜索区间」是 [left, right)
// 所以决定了 while (left < right)
// 同时也决定了 left = mid + 1 和 right = mid

// 因为我们需找到 target 的最右侧索引
// 所以当 nums[mid] == target 时不要立即返回
// 而要收紧左侧边界以锁定右侧边界

// 又因为收紧左侧边界时必须 left = mid + 1
// 所以最后无论返回 left 还是 right，必须减一
// 代码：
// int left = 0, right = nums.length;
// while (left < right) {
//     int mid = (left + right) / 2;
//     if (nums[mid] == target) {
//         left = mid + 1; // 注意
//     } else if (nums[mid] < target) {
//         left = mid + 1;
//     } else if (nums[mid] > target) {
//         right = mid;
//     }
// }
// return left - 1; // 注意


/** 34
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchRange = function (nums, target) {
  if (nums.length == 0)
    return [-1, -1];
  let lo = 0, hi = nums.length;
  let res = [];
  while (lo < hi) {
    let mid = Math.round((lo + hi - lo) / 2);
    if (nums[mid] == target) {
      hi = mid;
    } else if (nums[mid] > target) { //出现在左半部分
      hi = mid;
    } else if (nums[mid] < target) { //出现在右半部分
      lo = mid + 1;
    }
  }
  if (lo == nums.length) res[0] = -1;
  else res[0] = nums[lo] == target ? lo : -1;
  lo = 0; //重置
  hi = nums.length;
  while (lo < hi) {
    let mid = Math.round((lo + hi - lo) / 2)
    if (nums[mid] == target)
      lo = mid + 1;
    else if (target < nums[mid]) { //出现在左半部分
      hi = mid;
    } else if (target > nums[mid]) { //出现在右半部分
      lo = mid + 1;
    }
  }
  if (hi == 0) res[1] = -1;
  else
    res[1] = nums[hi - 1] == target ? hi - 1 : -1;
  return res;
}

searchRange([5, 7, 7, 8, 8, 10], 8)