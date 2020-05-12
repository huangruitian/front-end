/*
 * @Description:
 * @Autor: hrt
 * @Date: 2019-09-05 09:01:06
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-04 09:34:19
 */
// /*
//  * @Description:
//  * @Autor: hrt
//  * @Date: 2019-09-05 09:01:06
//  * @LastEditors: hrt
//  * @LastEditTime: 2019-10-22 14:30:27
//  */
// // 排序
// // 时间复杂度
// // 空间复杂度

// // 冒泡排序
// maopao = arr => {
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr;
// }
// //选择排序
// //遍历一次，每次都选择一个最小的，和当前的交换(再比较当前的和最小的)
// changeSort = arr => {
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     let min = i; //先标记一个最小的
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }
//     }
//     if (arr[i] > arr[min]) {
//       [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//   }
//   return arr;
// }
// //按奇偶排序数组|| -》先排序-》索引为基数放基数，索引为偶数放偶数
// jiouSort = arr => {
//   let len = arr.length
//   let result = []
//   let l = 1;
//   let r = 0
//   arr = arr.sort((a, b) => a - b)
//   for (let i = 0; i < len; i++) {
//     if (arr[i] % 2 == 1) {
//       result[l] = arr[i]
//       l += 2
//     } else {
//       result[r] = arr[i]
//       r += 2
//     }
//   }
//   return result;
// }

// // 插入排序
// // 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
// // 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
// function insertSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let target = i; //目标值
//     for (let j = i - 1; j >= 0; j--) {
//       if (array[target] < array[j]) {
//         //直接交互两个值
//         [array[target], array[j]] = [array[j], array[target]]
//         target = j; //target要跟着变，不然实际上没有交换
//       } else {
//         break;
//       }
//     }
//   }
//   return array;
// }

// // [1,1,2,2,2,3,3,4,4,5,5] 空间O(1) 时间O(n*重复最长的元素)
// // [1,2,2,2,2,3,3,4,4,5,5]
// function uniqueArr(arr) {
//   let f = 0 //指针
//   let count = 0 //计数
//   let g = 0 //覆盖前面的
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[f] === arr[i]) { //相同计数
//       count++
//     } else { //不相同，代表没重复的了，可以删成一个了
//       f++ //指针向前移一位
//       g = i
//       while (g >= f) {
//         arr[g] = arr[i]
//         g--
//       }
//     }
//   }
//   while (count > 0) {
//     arr.pop()
//     count--
//   }
//   return arr;
// }
// // 优化  内存 O（1） 时间 O（n(n-1)）
// function uniqueArr(nums) {
//   let f = 0 //指针
//   let g = 0 //覆盖前面的
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[f] !== nums[i]) {
//       f++ //指针向前移一位
//       g = i
//       while (g >= f) {
//         nums[g] = nums[i]
//         g--
//       }
//     }
//   }
//   nums.length = f + 1
//   return nums.length;
// }

// // 再优化优化？优化  内存 O（1） 时间 O（n） ?
// var removeDuplicates = function (nums) {
//   let f = 0 //指针
//   let len = nums.length
//   if (len > 2) {
//     nums.push(nums[0])
//     for (let i = 1; i < len; i++) {
//       if (nums[f] !== nums[i]) {
//         f = i //指针向前移
//         nums.push(nums[i])
//       }
//     }
//   }
//   nums.splice(0, len)
//   return nums.length;
// }
// //秒 tql
// var removeDuplicates = function (nums) {
//   let current = nums[0];
//   for (var i = 1; i < nums.length;) {
//     if (nums[i] === current) {
//       nums.splice(i, 1);
//     } else {
//       current = nums[i++];
//     }

//   }
//   return nums.length
// };
// //第K个大的元素
// // [3,2,1,5,6,4] k=2 返回5
// // 思路：先排序，选第K个
// // 优化，利用冒泡排序，冒泡排序每一轮是在找一个最大值，冒泡第K轮即可
// var findKthLargest = function (nums, k) {
//   let len = nums.length
//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < len; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//       }
//     }
//   }
//   //console.log(nums)
//   return nums[len - k]
// };
// //最大区间，也可以用冒泡来做
// var maximumGap = function (nums) {
//   let len = nums.length - 1
//   if (len < 1) {
//     return 0
//   }
//   let max = 0,
//     temp;
//   for (let i = len; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//       }
//     }
//     if (i < len) {
//       temp = nums[i + 1] - nums[i]
//       if (temp > max) {
//         max = temp
//       }
//     }
//   }
//   return Math.max(max, nums[1] - nums[0])
// };
// // 基础排序算法很重要
// // 缺失的第一个正整数（数组未排序）
// var firstMissingPositive = function (nums) {
//   let result = 1
//   nums.sort((a, b) => a - b)
//   //console.log(nums)
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= result) {
//       if (nums[i] == result) {
//         result++
//       } else {
//         return result
//       }
//     }
//   }
//   return result
// };
// //
// var firstMissingPositive = function (nums) {
//   let result = 1
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(result) != -1) {
//       result++
//     } else {
//       return result
//     }
//   }
//   return result
// };
// // 能不能再优化一下，利用选择排序，因为选择排序是在找最小值
// // 如果第一次遍历的最小值不是1，直接返回，如果是1那就继续比较差值

// // 快速排序
// // 原理 选一个基准值，比它大的放右边，比他小的放左边。直至排序完毕
// // 快排的高级算法（划分交换排序）
// // 思路：
// // 选第一个元素为标尺元素
// // 再从第二个元素开始交换（用一个指针L）
// // 再用一个指针R从第二个开始遍历
// // 然后以此来递归（判断传入的l,r截止）
// var quickSort = function (arr) {
//   if (!Array.isArray(arr)) {
//     return arr
//   }
//   //交换一轮，达到左边小的右边大的(index) in-place
//   let findCenter = (arr, left, right) => {
//     let flag = arr[left] //选取第一个元素做标尺，以第一个元素做标尺，小的一块，大的一块
//     let idx = left + 1 //下一个值开始交换，找到比标尺值小的，交换。
//     for (let i = idx; i <= right; i++) {
//       if (arr[i] < flag) { //flag第一个，[3, 2, 1]
//         [arr[i], arr[idx]] = [arr[idx], arr[i]]
//         idx++ //交换了这个指针下移一位
//       }
//     }
//     //找到最后没有了，把标尺值和交换的指针idx交换，就形成了一边大一边小
//     [arr[left], arr[idx - 1]] = [arr[idx - 1], arr[left]] //最后要记得交换标记值
//     return idx - 1 //返回这个中间值，是索引，所有减一
//   }
//   //递归交换完（排序）
//   let sort = (arr, left, right) => {
//     if (left < right) { //数组长度为2,递归出口
//       let center = findCenter(arr, left, right) //找一个中间值，这步是关键
//       sort(arr, left, center)
//       sort(arr, center + 1, right)
//     }
//   }
//   sort(arr, 0, arr.length - 1)
//   return arr;
// }
// // 给定两个数组，编写一个函数来计算它们的交集。
// var intersect = function (nums1, nums2) {
//   let result = []
//   let hash = new Map();
//   nums1.map(d => {
//     if (hash.has(d)) {
//       hash.set(d, hash.get(d) + 1)
//     } else {
//       hash.set(d, 1)
//     }
//   })
//   nums2.map(d => {
//     if (hash.has(d)) {
//       result.push(d)
//       if (hash.get(d) > 1) {
//         hash.set(d, hash.get(d) - 1)
//       } else {
//         hash.delete(d)
//       }
//     }
//   })
//   return result
// };
// //原生
// var intersect = function (nums1, nums2) {
//   let result = []
//   let hash = {};
//   for (let i = 0, len = nums1.length; i < len; i++) {
//     if (hash[nums1[i]] === undefined) {
//       hash[nums1[i]] = 1
//     } else {
//       hash[nums1[i]] += 1
//     }
//   }
//   for (let i = 0, len = nums2.length; i < len; i++) {
//     if (hash[nums2[i]] !== undefined) {
//       result.push(nums2[i])
//       if (hash[nums2[i]] > 1) {
//         hash[nums2[i]] -= 1
//       } else {
//         delete hash[nums2[i]]
//       }
//     }
//   }
//   return result
// };
// // 两个指针的思路呢？
// // 两个数组排序
// // 设定两个为0的指针，比较两个指针的元素是否相等
// // 如果相等，元素push到返回值里，两个指针同时往前
// // 如果不相等，元素小的指针往前
// // 如果相等，那肯定比较过的元素就没用了，两个指针++
// // 如果不相等，那把元素小的数组指针++。
// // 因为大元素可能在小元素数组里存在，但是小元素在大元素所在数组肯定不存在。因为已经排过序了。
// var intersect = function (nums1, nums2) {
//   let result = []
//   let p1 = 0,
//     p2 = 0
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   while (p1 < nums1.length && p2 < nums2.length) {
//     if (nums1[p1] == nums2[p2]) {
//       res.push(nums1[p1])
//       p1++
//       p2++
//     } else if (nums1[p1] < nums2[p2]) {
//       p1++
//     } else {
//       p2++
//     }
//   }
//   return result
// };
// //indexOf思路
// var intersect = function (nums1, nums2) {
//   let result = [];
//   if (nums1.length < nums2.length)[nums1, nums2] = [nums2, nums1];
//   for (let i = nums1.length; i--;) {
//     let index = nums2.indexOf(nums1[i]);
//     if (index !== -1) result.push(nums2.splice(index, 1));
//   }
//   return result;
// };

// // 给定由一些正数（代表长度）组成的数组 A，
// // 返回由其中三个长度组成的、面积不为零的三角形的最大周长。
// // 如果不能形成任何面积不为零的三角形，返回 0。
// // 先排序，再选择
// var largestPerimeter = function (A) {
//   if (A.length < 3) {
//     return 0
//   }
//   A.sort((a, b) => b - a);
//   for (let i = A.length - 3; i >= 0; --i)
//     if (A[i] + A[i + 1] > A[i + 2] && A[i] + A[i + 2] > A[i + 1] && A[i + 1] + A[i + 2] > A[i])
//       return A[i] + A[i + 1] + A[i + 2];
//   return 0;
// };
// // 优化，用冒泡排序
// // 其实这个感觉最好冒泡的写法, 因为我们没必要全部把数组排序完, 再 去比较 两边之和大于第三边
// // 冒泡排序, 每排一轮, 就会选出个最大值放在后边, 当排三轮后, 我们就可以比较了,
// // 如果现在出现了符合三角情况的, 就直接返回, 不在排序了,
// // 如果还没出现, 就再来一轮, 再选出个,
// var largestPerimeter = function (A) {
//   let len = A.length
//   if (len < 3) {
//     return 0
//   }
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (A[j] > A[j + 1]) {
//         [A[j], A[j + 1]] = [A[j + 1], A[j]]
//       }
//     }
//     if (i >= 2) { //2
//       let a = A[len - 1 - i],
//         b = A[len - i],
//         c = A[len - i + 1];
//       if (a + b > c && a + c > b && c + b > a) {
//         return a + b + c
//       }
//     }
//   }
//   //console.log(A)
//   return 0;
// };
// // 有效的字母异位词（如果考虑特殊字符呢？）
// var isAnagram = function (s, t) {
//   if (s.length != t.length) {
//     return false
//   }
//   let len = t.length
//   let hash = new Map();
//   for (let i = 0; i < len; i++) {
//     //加
//     if (hash.get(s[i])) {
//       hash.set(s[i], hash.get(s[i]) + 1)
//     } else {
//       hash.set(s[i], 1)
//     }
//     //减
//     if (hash.get(t[i])) {
//       hash.set(t[i], hash.get(t[i]) - 1)
//     }
//   }
//   return Object.keys(hash).every(d => d === 0)
// };

// //合并区间
// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge1 = function (intervals) {
//   //sort intervals
//   intervals.sort((a, b) => a[0] - b[0])
//   for (let i = 1, len = intervals.length; i < len; i++) {
//     if (intervals[i][0] <= intervals[i - 1][1]) {
//       let s = intervals[i][0] < intervals[i - 1][0] ? intervals[i][0] : intervals[i - 1][0]
//       let end = intervals[i][1] > intervals[i - 1][1] ? intervals[i][1] : intervals[i - 1][1]
//       intervals.splice(i - 1, 2, undefined, [s, end])
//     }
//   }
//   return intervals.filter(Boolean)
// };

// /**
//  * zui最长连续递增子序列 128
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   if (nums.length == 0) {
//     return 0
//   }
//   let map = new Map
//   nums.forEach(d => {
//     if (!map.has(d)) {
//       map.set(d, d)
//     }
//   })
//   let longestCnt = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i]
//     if (map.has(num)) {
//       let curCnt = 1;
//       while (map.has(num + 1)) {
//         num++;
//         curCnt++;
//       }
//       longestCnt = Math.max(longestCnt, curCnt);
//     }
//   }
//   return longestCnt
// };

// // 分治法，归并排序，先分割，再二路归并
// function mergeSort(array) {
//   let len = array.length
//   if (len < 2) {
//     return array
//   }
//   let mid = Math.floor(len / 2);
//   let left = array.slice(0, mid)
//   let right = array.slice(mid)
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let temp = []
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       temp.push(left.shift())
//     } else {
//       temp.push(right.shift())
//     }
//   }
//   while (left.length) {
//     temp.push(left.shift())
//   }
//   while (right.length) {
//     temp.push(right.shift())
//   }
//   return temp
// }

// // console.log(mergeSort([9, 5, 1, 3, 5, 7, 2, 6, 4, 8, 0]))

// //快排 分治思想
// function quickSort1(arr) {
//   if (arr.length < 2) {
//     return arr
//   }
//   let mid = arr.shift()
//   let left = []
//   let right = []
//   while (arr.length) {
//     if (mid > arr[0]) {
//       left.push(arr.shift())
//     } else {
//       right.push(arr.shift())
//     }
//   }
//   return quickSort1(left).concat(mid, quickSort1(right))
// }

// //划分交换排序（快排的高级写法）
// function quickSort2(arr) {

//   let findCenter = (arr, left, right) => {
//     let flag = arr[left]
//     let idx = left + 1
//     // idx从第二位开始比较，idx总数在最小值或者最大值的一边
//     for (let i = idx; i <= right; i++) {
//       if (flag > arr[i]) {
//         [arr[idx], arr[i]] = [arr[i], arr[idx]]
//         idx++
//       }
//     }
//     [arr[left], arr[idx - 1]] = [arr[idx - 1], arr[left]]
//     return idx - 1
//   }

//   let sort = (arr, left, right) => {
//     if (left < right) {
//       let mid = findCenter(arr, left, right)
//       sort(arr, 0, mid)
//       sort(arr, mid + 1, right)
//     }
//   }
//   sort(arr, 0, arr.length - 1)
//   return arr
// }

// 复习
// 冒泡排序：循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。
// 下一次循环继续上面的操作，不循环已经排序好的数。
// 优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。

let bubbleSort = (arr) => {
  //走的趟数
  for (let i = 0, len = arr.length; i < len; i++) {
    //一开始默认已经排好序
    let complete = true;
    //如果走完一趟之后，最大一个数肯定在最后，就不需要比较了
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        complete = false;
      }
    }
    console.log(`第${i + 1}趟数组：`, arr);
    //没有进入内层循环说明已经是有序数组，直接break
    if (complete) {
      break;
    }
  }
  return arr;
};
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定

// console.log(bubbleSort([7, 5, 3, 1, 9, 4, 6, 8, 2]))

// 插入排序
// 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
// 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

let insertSort = (arr) => {
  //拿出目标值，待插入元素（动图的红色方块）
  let target = 0;
  //从右边第二个开始比较
  for (let i = 1, len = arr.length; i < len; i++) {
    target = i;
    //内层循环，控制左边的有序数组
    for (let j = i - 1; j >= 0; j--) {
      //插到有序序列比j小的前面
      if (arr[target] < arr[j]) {
        //es6 交换两个数
        [arr[j], arr[target]] = [arr[target], arr[j]];
        target = j;
      } else {
        //如果一趟下来没有进行插入操作，说明是有序了
        break;
      }
    }
  }
  return arr;
};
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定

// console.log(insertSort([7, 5, 3, 1, 9, 4, 6, 8, 2]))

// 选择排序
// 每次循环选取一个最小的数字放到前面的有序序列中。（这和冒泡很像）

let selectSort = (arr) => {
  //动图红色方块，被选择的数
  let min = 0;
  // -1是因为最后一个肯定是最大或者最小的了
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    min = i;
    //找一个最小的和i交换，从i + 1 开始
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        //遍历更新最小数的索引
        min = j;
      }
    }
    //一趟之后肯定找到最小的，交换
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定

// console.log(selectSort([7, 5, 3, 1, 9, 4, 6, 8, 2]))

// 快速排序，利用了分治的思想（将问题分解成一些小问题递归求解）
// 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，
// 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。

// let quickSort = (arr) => {
//   let len = arr.length
//   // 递归出口
//   if (len < 2) {
//     return arr
//   }
//   //基准值
//   let target = arr.shift()
//   // 小的放左边
//   let left = []
//   // 大的放右边
//   let right = []
//   // 遍历数组
//   for (let i = 0; i < len - 1; i++) {
//     if(target > arr[i]){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   // 递归左边left和右边right
//   return quickSort1(left).concat(target, quickSort1(right))
// }

// 优化？优化下内存，也叫划分交换法
// 利用两个指针，一个指针指向起始目标值，另一个指针idx指向要交换的值
// 满足条件条件 idx < t, 则把小的放到左边，idx右移一位；
// 最后一趟之后 t [小于t] [idx, 大于t]
// 要把 t 和 idx - 1 互换，变成 [小于t, t] [大于t], 并且返回 t 的索引进行下一轮递归
function quickSort(array) {
  let findCenter = (l, r, arr) => {
    let t = arr[l]; //比较的目标值
    let idx = l + 1;
    for (let i = idx; i <= r; i++) {
      if (arr[i] < t) {
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        idx++;
      }
    }
    [arr[l], arr[idx - 1]] = [arr[idx - 1], arr[l]];
    return idx - 1; //最后的索引
  };
  let sort = (l, r, arr) => {
    // 递归出口
    if (l < r) {
      //每次拿到一个中间值
      let mid = findCenter(l, r, arr);
      // 递归左边
      sort(l, mid, arr);
      // 递归右边，和解法一是一样的思路
      sort(mid + 1, r, arr);
    }
  };
  sort(0, array.length - 1, array);
  return array;
}
// 时间复杂度：平均O(NlogN)，最坏O(n^2)，实际上大多数情况下小于O(NlogN)
// 空间复杂度: O(logN)（递归调用消耗）
// 稳定性：不稳定
// console.log(quickSort([7, 5, 3, 1, 9, 4, 6, 8, 2]))

// 归并排序，利用分治的思想实现的排序方法。
// 一直往下分，分到小于2，就反过来合

let mergeSort = (array) => {
  // 递归出口
  if (array.length < 2) {
    return array;
  }
  // 找一个中间值，因为要对半分数组
  const mid = Math.floor(array.length / 2);
  //左边到中间值（不包括中间值）
  const front = array.slice(0, mid);
  //中间值到左边
  const end = array.slice(mid);
  //这步是关键，每次调用mergeSort分解函数，就会同时调用merge合并函数就形成了上图的效果
  return merge(mergeSort(front), mergeSort(end));
};

function merge(left, right) {
  let temp = [];
  //想想合并的过程
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  // 防止合完了左边还有数
  while (left.length) {
    temp.push(left.shift());
  }
  // 防止合完了右边还有数
  while (right.length) {
    temp.push(right.shift());
  }
  return temp;
}
// 时间复杂度：O(NlogN)
// 空间复杂度: O(n)（递归调用消耗）
// 稳定性：不稳定

// 堆排序
// 1.创建一个大顶堆，大顶堆的堆顶一定是最大的元素。
// 2.交换第一个元素和最后一个元素，第一个元素破坏了大顶堆，继续以第一个（除最后一个）做heapify。
// 3.从后往前以此和第一个元素交换并重新构建，排序完成。

// function heapSort(arr) {
//   createMaxHeap(arr);
//   // 交换第一个和最后一个元素，然后重新调整大顶堆
//   for (let i = arr.length - 1; i > 0; i--) {
//     swap(0, i, arr)
//     //继续调整大顶堆（除了最后一个），因为交换了第一个破坏了结构
//     heapify(arr, 0, i);
//   }
//   return arr;
// }

// // 构建大顶堆，从第一个非叶子节点开始，进行下沉操作
// function createMaxHeap(arr) {
//   const len = arr.length;
//   // 从第一个父节点开始往上heapify, heapify到根节点就变成一个堆
//   const parent = Math.floor(len / 2) - 1;
//   for (let i = parent; i >= 0; i--) {
//     heapify(arr, i, len);
//   }
//   return arr
// }

// // heapify
// // 首先要要明确堆可以用数组下标表述，因为堆是一个完全二叉树
// // 然后堆 的一些公式
// // 已知节点i, 左子节点2*i+1，右2*i+2，父节点(i-1)/2, i 是索引
// // 然后其实构建一个堆就是从最后一个父节点开始 heapify操作，一直heapify到第一个父节点的过程
// // 将第个元素进行下沉，孩子节点有比他大的就下沉

// function heapify(arr, t, len) {
//   let max = t
//   let l = t * 2 + 1
//   let r = t * 2 + 2
//   // 找到孩子节点中最大的
//   if (l < len && arr[l] > arr[max]) {
//     max = l
//   }
//   if (r < len && arr[r] > arr[max]) {
//     max = r
//   }
//   // 节点下沉
//   if (max != t) {
//     swap(t, max, arr)
//     //因为max节点和t节点交换了，破坏了原来的树结构，根据它递归即可
//     heapify(arr, max, len)
//   }
// }

// function swap(i, j, arr) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const heapify = (i, len, arr) => {
  if (i >= len) {
    return;
  }
  let max = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  // len防止越界
  if (l < len && arr[l] > arr[max]) {
    max = l;
  }
  if (r < len && arr[r] > arr[max]) {
    max = r;
  }
  if (max != i) {
    swap(max, i, arr);
    heapify(max, len, arr);
  }
};

const createMaxHeap = (arr) => {
  let len = arr.length;
  // heapify(0, len, arr) //不是乱序的数组可以这么来
  let parent = (len / 2) >> 1;
  // 如果数组乱序必须从最后一个父节点开始全部做heapify
  for (let i = parent; i >= 0; i--) {
    heapify(i, len, arr);
  }
  return arr;
};

const heapSort = (arr) => {
  createMaxHeap(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    //第一个和最后一个交换
    swap(i, 0, arr);
    //剩下的再做次heapify构建成堆把最值弄到堆根
    heapify(0, i, arr);
  }
  return arr;
};

// console.log('createMaxHeap', createMaxHeap([4, 10, 3, 5, 1, 2]))
// console.log('heapSort', heapSort([4, 10, 3, 5, 1, 2]))

//二叉搜索树的中序遍历，
//1.构建一个二叉搜索时
//2.中序遍历 O(n)

let midOrderSort = (arr) => {
  //构建二叉搜索树
  //二叉搜索树的中序遍历
  let buildTree = (arr) => {
    class Node {
      constructor(val) {
        this.val = val;
        this.right = this.left = undefined;
      }
    }
    let root = new Node(arr.shift());
    let cur = root;
    let parent = null;
    while (arr.length) {
      let node = new Node(arr.shift());
      cur = root;
      while (cur) {
        parent = cur;
        if (node.val >= cur.val) {
          cur = cur.right;
          if (!cur) {
            parent.right = node;
          }
        } else {
          cur = cur.left;
          if (!cur) {
            parent.left = node;
          }
        }
      }
    }
    return root;
  };
  let midOrder = (root) => {
    let stack = [];
    let cur = root;
    let res = [];
    while (cur || stack.length) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
    return res;
  };
  return midOrder(buildTree(arr));
};

console.log("res", midOrderSort([4, 4, 10, 3, 5, 1, 2]));
// 时间复杂度 O(n)
// 空间复杂度 O(n)
// 不稳定

// 计数排序
// 9，3，5，4，9，1，2，7，8，1，3，6，5，3，4，0，10，9 ，7，9
let arr = [9, 3, 5, 4, 9, 1, 2, 7, 8, 1, 3, 6, 5, 3, 4, 0, 10, 9, 7, 9];
let arr1 = [99, 100, 98, 97, 105];
let countSort = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let len = max - min + 1; //偏移量
  let countArr = Array(len).fill(0);
  arr.forEach((d) => countArr[d - min]++);
  let idx = 0;
  countArr.forEach((d, i) => {
    while (d > 0) {
      arr[idx++] = i + min;
      d--;
    }
  });
  // console.log('countArr', countArr)
  return arr;
};
console.log(countSort(arr1));

const sort = (array) => {
  const findCenter = (L, R, A) => {
    let flag = A[L];
    let idx = L + 1;
    for (let i = idx; i <= R; i++) {
      // 保证所有的元素都比标尺元素小
      if (A[i] < flag) {
        [A[i], A[idx]] = [A[idx], A[i]];
        idx++;
      }
    }
    [A[L], A[idx - 1]] = [A[idx - 1], A[L]];
    return idx - 1;
  };
  //1.选一个标尺元素，大的放一遍，小的放一边
  const quickSort = (left, right, arr) => {
    if (left < right) {
      const mid = findCenter(left, right, arr);
      quickSort(left, mid, arr);
      quickSort(mid + 1, right, arr);
    }
  };
  quickSort(0, array.length - 1, array);
  return array;
};

// 归并排序 先分，再合
const sort = (
  arr = [9, 3, 5, 4, 9, 1, 2, 7, 8, 1, 3, 6, 5, 3, 4, 0, 10, 9, 7, 9]
) => {
  const mergeSort = (array) => {
    let len = array.length;
    if (len < 2) {
      return array;
    }
    let mid = len >> 1;
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };
  const merge = (left, right) => {
    let temp = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        temp.push(right.shift());
      } else {
        temp.push(left.shift());
      }
    }
    while (left.length) {
      temp.push(left.shift());
    }
    while (right.length) {
      temp.push(right.shift());
    }
    return temp
  };
  return mergeSort(arr);
};
