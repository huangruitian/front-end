/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-08-26 11:29:34
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-21 17:11:47
 */

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
// 设定两个指针
// 第一个指针start从数组第一个元素出发，向尾部前进
// 第二个指针end从数组的最后一个元素出发，向头部前进
// start遍历到偶数，end遍历到奇数时，交换两个数的位置
// 当start > end时，完成交换

// function reOrderArray(array) {
//   if (Array.isArray(array)) {
//     let start = 0
//     let end = array.length - 1
//     while (end > start) {
//       //找到偶数
//       while (array[start] % 2 === 1) {
//         start++;
//       }
//       //找到奇数
//       while (array[end] % 2 === 0) {
//         end--;
//       }
//       if (end > start) {
//         //交换值
//         [array[start], array[end]] = [array[end], array[start]]
//       }
//     }
//   }
//   return array;
// }

// // 输入一个正数S，打印出所有和为S的连续正数序列。
// // 输入15 --> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
// // 例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。

// function FindContinuousSequence(sum) {
//   let len = sum
//   let sumArr = []
//   let chilArr = []
//   for (let i = 1; i < len; i++) {
//     sumArr.push(i);
//   }
//   for (let j = 0; j < sumArr.length; j++) {
//     getChilArr(sumArr.slice(j), chilArr, sum)
//   }
//   console.log(chilArr)
//   return chilArr
// }

// function getChilArr(arr, chilArr, sum) {
//   let result = 0;
//   let resultArr = []
//   for (let j = 0; j < arr.length; j++) {
//     result += arr[j];
//     resultArr.push(arr[j]);
//     if (result === sum) {
//       chilArr.push(resultArr);
//       return
//     }
//     if (result >= sum) {
//       return
//     }
//   }
// }
// // FindContinuousSequence(15);

// // 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
// // 如果有多对数字的和等于S，输出两个数的乘积最小的。
// // 思路：
// // 设定一个小索引left，从0开始
// // 设定一个大索引right，从array.length开始
// // 判断array[left] + array[right]的值s是否符合条件
// // 符合条件 - 返回
// // 大于sum，right向左移动
// // 小于sum，left向右移动
// // 若left=right，没有符合条件的结果

// function FindNumbersWithSum(array, sum) {
//   if (Array.isArray(array)) {
//     let left = 0;
//     let right = array.length - 1;
//     while (right > left) {
//       const s = array[right] + array[left]
//       if (s > sum) {
//         right--
//       } else if (s < sum) {
//         left++
//       } else {
//         return [array[left], array[right]]
//       }
//     }
//   }
// }
// // 如果是无序的呢？
// // 1.先有序化，再继续
// // 2. indexOf()? map?

// // 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
// // 求所有子数组的和的最大值，要求时间复杂度为O(n)
// // 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
// // 思路：
// // 记录一个当前连续子数组最大值 max 默认值为数组第一项
// // 记录一个当前连续子数组累加值 sum 默认值为数组第一项
// // 1.从数组第二个数开始，若 sum<0 则当前的sum不再对后面的累加有贡献，sum = 当前数
// // 2.若 sum>0 则sum = sum + 当前数
// // 3.比较 sum 和 max ，max = 两者最大值

// function FindGreatestSumOfSubArray(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     let sum = array[0];
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//       if (sum < 0) {
//         sum = array[i];
//       } else {
//         sum = sum + array[i];
//       }
//       if (sum > max) {
//         max = sum;
//       }
//     }
//     return max;
//   }
//   return 0;
// }

// // 给定一个整数数组 nums 和一个目标值 target，
// // 请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// // 给定 nums = [2, 7, 11, 15], target = 9
// // 因为 nums[0] + nums[1] = 2 + 7 = 9
// // 所以返回 [0, 1]
// // 也可以先排序，用两个指针无限的逼近结果
// var twoSum = function (nums, target) {
//   if (Array.isArray(nums)) {
//     const map = {}
//     for (let i = 0; i < nums.length; i++) {
//       if (map[target - nums[i]] != undefined) {
//         console.log(map[target - nums[i]], i)
//         return [map[target - nums[i]], i];
//       } else {
//         map[nums[i]] = i;
//       }
//     }
//     return [];
//   }
// }

// twoSum([2, 1, 7, 11, 15], 2)

// // 扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// // 2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。
// // 思路：
// // 1.数组排序
// // 2.遍历数组
// // 3.若为0，记录0的个数加1
// // 4.若不为0，记录和下一个元素的间隔
// // 5.最后比较0的个数和间隔数，间隔数>0的个数则不能构成顺子
// // 6.注意中间如果有两个元素相等则不能构成顺子
// function IsContinuous(numbers) {
//   if (Array.isArray(numbers)) {
//     numbers.sort();
//     let kingNum = 0;
//     let spaceNum = 0;
//     for (let i = 0; i < numbers.length - 1; i++) { // 遍历n - 1个数，保证数组不越界 
//       if (numbers[i] === 0) {
//         kingNum++
//       } else {
//         const space = numbers[i + 1] - numbers[i]
//         if (space == 0) {
//           return false
//         } else {
//           spaceNum += space - 1;
//         }
//       }
//     }
//     return kingNum - spaceNum >= 0;
//   }
//   return false
// }
// IsContinuous([1, 2, 3, 4, 6])

// // 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，
// // 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// // 注意：答案中不可以包含重复的三元组。
// // 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// // 满足要求的三元组集合为：
// // [
// //   [-1, 0, 1],
// //   [-1, -1, 2]
// // ]
// // 三数之和？
// var threeSum = function (nums) {
//   const result = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     // 跳过重复数字
//     if (i && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum > 0) {
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         result.push([nums[i], nums[left++], nums[right--]]);
//         // 跳过重复数字
//         while (nums[left] === nums[left - 1]) {
//           left++;
//         }
//         // 跳过重复数字
//         while (nums[right] === nums[right + 1]) {
//           right--;
//         }
//       }
//     }
//   }
//   return result;
// }

// // 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
// // 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
// // 思路：
// // 1.排序
// // 2.遍历 累加相同的数count, count >= length/2 返回
// // 3.不相同就重置count 

// function MoreThanHalfNum_Solution1(numbers) {
//   if (numbers && numbers.length > 0) {
//     let len = numbers.length;
//     let count = 0;
//     let lastIndex = 0;
//     numbers.sort() //排序O(nlog n)
//     for (let i = 0; i < len; i++) { //找相同count O(n)
//       if (numbers[lastIndex] == numbers[i]) {
//         count++
//         if (count > len / 2) {
//           return numbers[i]
//         }
//       } else {
//         lastIndex = i;
//         count = 0;
//       }
//     }
//     return null
//   }
// }
// // map计数解法
// function MoreThanHalfNum_Solution(numbers) {
//   if (numbers && numbers.length > 0) {
//     var length = numbers.length;
//     var temp = {};
//     for (var i = 0; i < length; i++) {
//       if (temp['s' + numbers[i]]) {
//         temp['s' + numbers[i]]++;
//       } else {
//         temp['s' + numbers[i]] = 1;
//       }
//       if (temp['s' + numbers[i]] > length / 2) {
//         return numbers[i];
//       }
//     }
//     return 0;
//   }
// }

// // 电话号码 2-9
// // 输入字符串23，一个数字代表三个字母 -> 2abc 3efg -> 输出所有的字母组合：[ae,af,ag,be,bf,bg,ce,cf,cg] hij
// // -->  aeh,afh,agh,beh,bfh,bgh,ceh,cfh,cgh, aei,afi,agi,bei,bfi,bgi,cei,cfi,cgi, aej,afj,agj,bej,bfj,bgj,cej,cfj,cgj
// // 递归实现
// function tempPhoneNumber(str) {
//   let result = []
//   let arr = typeof str === 'string' ? str.split(' ') : str
//   for (let i = 0; i < arr[0].length; i++) {
//     for (let j = 0; j < arr[1].length; j++) {
//       result.push(arr[0][i] + arr[1][j]);
//     }
//   }
//   arr.splice(0, 2, result)
//   if (arr.length > 1) {
//     tempPhoneNumber(arr)
//   } else {
//     // console.log(arr)
//     return arr;
//   }
// }
// // 非递归实现
// function tempPhoneNumber(str) {
//   let result = []
//   let arr = str.split(' ')
//   while (arr.length > 1) {
//     for (let i = 0; i < arr[0].length; i++) {
//       for (let j = 0; j < arr[1].length; j++) {
//         result.push(arr[0][i] + arr[1][j]);
//       }
//     }
//     arr.splice(0, 2, result)
//     result = []
//   }
//   console.log(arr)
//   return arr;
// }
// console.time("时间：");
// console.timeEnd("时间：");
// // 优化？QAQ
// // 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// // 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// // 注意：答案中不可以包含重复的三元组。
// // 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// // 满足要求的三元组集合为：
// // [
// //   [-1, 0, 1],
// //   [-1, -1, 2]
// // ]
// // 1.为了方便去重，我们首先将数组排序
// // 2.对数组进行遍历，取当前遍历的数nums[i]为一个基准数，遍历数后面的数组为寻找数组
// // 3.在寻找数组中设定两个起点，最左侧的left(i+1)和最右侧的right(length-1)
// // 4.判断nums[i] + nums[left] + nums[right]是否等于0，如果等于0，加入结果，并分别将left和right移动一位
// // 5.如果结果大于0，将right向左移动一位，向结果逼近
// // 5.如果结果小于0，将left向右移动一位，向结果逼近

// var threeSum = function (nums) {
//   const result = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     // 跳过重复数字
//     if (i && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum > 0) {
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         result.push([nums[i], nums[left++], nums[right--]]);
//         // 跳过重复数字
//         while (nums[left] === nums[left - 1]) {
//           left++;
//         }
//         // 跳过重复数字
//         while (nums[right] === nums[right + 1]) {
//           right--;
//         }
//       }
//     }
//   }
//   return result;
// }

// // 你已经经历了两数之和、三数之和，玩玩没想到，还有四数之和...
// // 其实，后面还有五数之和，六数之和...
// // 到这里其实我们就能发现一些规律，我们可以像三数之和那样，
// // 我们可以通过大小指针来逼近结果，从而达到降低一层时间复杂度的效果。
// // 不管是几数之和，我们都用这种方法来进行优化。
// var fourSum = function (nums, target) {
//   if (nums.length < 4) {
//     return [];
//   }
//   nums.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0; i < nums.length - 3; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
//       break;
//     }
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) {
//         continue;
//       }
//       let left = j + 1,
//         right = nums.length - 1;
//       while (left < right) {
//         const sum = nums[i] + nums[j] + nums[left] + nums[right];
//         if (sum === target) {
//           result.push([nums[i], nums[j], nums[left], nums[right]]);
//         }
//         if (sum <= target) {
//           while (nums[left] === nums[++left]);
//         } else {
//           while (nums[right] === nums[--right]);
//         }
//       }
//     }
//   }
//   return result;
// };

// // 在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。
// // 使得排序后数组中球的顺序为:黄、红、蓝。
// // 例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
// sortColor = colorArr => {
//   if (Array.isArray(colorArr)) {
//     let map = {}
//     colorArr.map((item, index) => {
//       if (map[item]) {
//         map[item].push(item)
//       } else {
//         map[item] = []
//         map[item].push(item)
//       }
//     })
//     return [...map['黄'], ...map['红'], ...map['蓝']]
//   }
//   return colorArr;
// }
// //优化？
// sortColor = colorArr => {
//   if (Array.isArray(colorArr)) {
//     let map = {}
//     colorArr.map((item, index) => {
//       if (map[item]) {
//         map[item].push(item)
//       } else {
//         map[item] = []
//         map[item].push(item)
//       }
//     })
//     return [...map['黄'], ...map['红'], ...map['蓝']]
//   }
//   return colorArr;
// }
// //卡牌分组
// function groupArr(arr) {
//   //排序以便分组
//   let str = arr.sort((a, b) => a - b).join()
//   //分组，正则模式匹配(相同的数字或者一个)
//   let group = str.match(/(\d)\1+|\d/g)
//   while (group.length > 1) {
//     let a = group.shift().length
//     let b = group.shift().length
//     let v = gcb(a, b)
//     if (v === 1) {
//       return false
//     } else {
//       group.unshift('0'.repeat(v))
//       // v = gcb(v, group.shift().length)
//     }
//   }
//   //去边界
//   return group.length ? group[0].length > 1 : false
// }
// //求两个数的最大公约数
// function gcb(a, b) {
//   if (b === 0) {
//     return a
//   } else {
//     gcb(b, a % b)
//   }
// }

// //种花问题
// // [1,0,0,0,1], n=1 => true  
// // [1,0,0,0,1], n=2 => false
// function canPlaceFlowers(arr, n) {
//   let max = 0;
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     if (arr[i] === 0) {
//       if (i === 0 && arr[1] === 0) {
//         max++
//         i++
//       } else if (i === len - 1 && arr[len - 2] === 0) {
//         max++
//         break
//       } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
//         max++
//         i++
//       }
//     }
//   }
//   return max >= n;
// }

// //格雷编码 3 2 1
// function getGrayCode(n) {
//   if (n == 0) {
//     return ['0']
//   }
//   if (n == 1) {
//     return ['0', '1']
//   }
//   let max = Math.pow(2, n) - 1 //观察输出得出最大长度
//   let prev = getGrayCode(n - 1) //['0', '1'] 4 3 2 1
//   let result = []
//   //其实每次的格雷编码就是上一次的前部分加0,后半部分加1
//   for (let i = 0; i <= max / 2; i++) {
//     result[i] = `0${prev[i]}`
//     result[max - i] = `1${prev[i]}`
//   }
//   return result
// };
// //找输入，找输出，问题抽象，数学建模，双指针（几个数之和逼近结果），链表，队列，栈，排序

// // 给定一个元素都是正整数的数组A ，正整数 L 以及 R (L <= R)。
// // 求连续、非空且其中最大元素满足大于等于L 小于等于R的子数组个数。

// // 例如 :
// // 输入: 
// // A = [2, 1, 4, 3]
// // L = 2
// // R = 3
// // 输出: 3
// // 解释: 满足条件的子数组: [2], [2, 1], [3].
// // A[i] >= L && A[i] <= R
// var numSubarrayBoundedMax = function (A, L, R) {
//   if (A.length < 1) return 0;
//   let len = A.length;
//   let ans = 0;
//   let l = 0,
//     r = 0;
//   while (r < len) {
//     if (L <= A[r] && A[r] <= R) { //情况一
//       ans += r - l + 1;
//       r++;
//     } else if (A[r] < L) { // 情况二
//       let t = r - 1;
//       while (t >= l && A[t] < L) t--;
//       ans += t - l + 1;
//       r++;
//     } else { // 情况三
//       l = r + 1;
//       r++;
//     }
//   }
//   return ans;
// }

// // 输入：[3,1,2,4]
// // 输出：17
// // 解释：
// // 子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
// // 最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。// 1 1 2 6
// var sumSubarrayMins = function (A) {
//   // 1 2 3 4 ...n
//   let len = A.length
//   let resultArr = []
//   let result = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       resultArr.push(A.slice(i, j + 1))
//     }
//   }
//   for (let i = 0; i < resultArr.length; i++) {
//     resultArr[i].sort((a, b) => a - b)
//     result += resultArr[i][0]
//   }
//   console.log(result)
// };

// //31 出现次数最多的数字
// function getRepeatNumber(repeatArr) {
//   if (Array.isArray(repeatArr)) {
//     let map = {}
//     let max = 1;
//     repeatArr.map((d, i) => {
//       if (map[d] === undefined) {
//         map[d] = 1
//       } else {
//         map[d] += 1
//       }
//       //边存边比较？
//       if (map[d] > max) {
//         max = map[d]
//       }
//     })
//     return max
//   }
//   return null
// }

// // 给你一组整型数据，这些数据中，其中有一个数只出现了一次，其他的数都出现了两次，让你来找出一个数 。
// function find(arr) {
//   let tmp = arr[0];
//   for (let i = 1, len = arr.length; i < len; i++) {
//     tmp = tmp ^ arr[i];
//   }
//   return tmp;
// }

// /** 15.三数之和
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum1 = function (nums) {
//   // 1.先排序
//   // 2.先用k指定第一个数，然后用两个指针；
//   // 3.left, right两个指针指向首尾，判断当前的sum，等于0就加入结果
//   // 4.要注意重复的元组，相等了跳过
//   let res = []
//   nums.sort((a, b) => a - b)
//   for (let i = 0, len = nums.length; i < len; i++) {
//     // 跳过重复数字
//     if (i && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     //排序后的数第一个任然大于0，说明三个数相加不能等于0了
//     if (nums[i] > 0) {
//       break;
//     }
//     let left = i + 1
//     let right = len - 1
//     while (left < right) {
//       let sum = nums[i] + nums[left] + nums[right];
//       if (sum < 0) {
//         left++
//       } else if (sum > 0) {
//         right--
//       } else {
//         //用了之后记得位移
//         res.push([nums[i], nums[left++], nums[right--]])
//         //怎么避免重复的数
//         while (nums[left] == nums[left - 1]) {
//           left++
//         }
//         while (nums[right] == nums[right + 1]) {
//           right--
//         }
//       }
//     }
//   }
//   return res
// };

// console.log(threeSum1([-1, 0, 1, 2, -1, -4]))

// /** 层次遍历
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function (root) {
//   if (!root) {
//     return
//   }
//   let queue = [root]
//   let ret = []
//   while (queue.length) {
//     let len = queue.length
//     let res = []
//     while (len > 0) {
//       let node = queue.shift()
//       res.push(node.val)
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//       len--
//     }
//     ret.push(res)
//   }
// };


// var combinationSum3 = function (k, n) {
//   // k数之和为n, 递归
//   let res = []
//   let addSum = (k, n) => {
//     // 1
//     // 2 3 ... 
//     // 3 4 5

//   }
//   return res
// };

// /** 三数之和的变种
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   let ans = nums[0] + nums[1] + nums[2];
//   for (let i = 0; i < nums.length; i++) {
//     let start = i + 1,
//       end = nums.length - 1;
//     while (start < end) {
//       let sum = nums[start] + nums[end] + nums[i];
//       if (Math.abs(target - sum) < Math.abs(target - ans))
//         ans = sum;
//       if (sum > target)
//         end--;
//       else if (sum < target)
//         start++;
//       else
//         return ans;
//     }
//   }
//   return ans;
// }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 1.先排序
  // 2.先用k指定第一个数，然后用两个指针；
  // 3.left, right两个指针指向首尾，判断当前的sum，等于0就加入结果
  // 4.要注意重复的元组，相等了跳过
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i && nums[i] == nums[i - 1]) {
      continue
    }
    if (nums[i] > 0) {
      break
    }
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        res.push([nums[i], nums[left++], nums[right--]])
        while (nums[left] == nums[left - 1]) {
          left++
        }
        while (nums[right] == nums[right + 1]) {
          right--
        }
      }
    }
  }
  return res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    let mid = (right + left) >>> 1
    if (target == nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return -1
};

// int left_bound(int[] nums, int target) {
//   if (nums.length == 0) return -1;
//   int left = 0;
//   int right = nums.length; // 注意
//   while (left < right) { // 注意
//       int mid = (left + right) / 2;
//       if (nums[mid] == target) {
//           right = mid;
//       } else if (nums[mid] < target) {
//           left = mid + 1;
//       } else if (nums[mid] > target) {
//           right = mid; // 注意
//       }
//   }
//   return left;
// }

// int right_bound(int[] nums, int target) {
//   if (nums.length == 0) return -1;
//   int left = 0, right = nums.length;
//   while (left < right) {
//       int mid = (left + right) / 2;
//       if (nums[mid] == target) {
//           left = mid + 1; // 注意
//       } else if (nums[mid] < target) {
//           left = mid + 1;
//       } else if (nums[mid] > target) {
//           right = mid;
//       }
//   }
//   return left - 1; // 注意
// }
// 注意：等于就是基本的二分，
// 找左缩右：nums[mid] == target时，right = mid;
// 找右缩左：nums[mid] == target时，left = mid + 1;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] == target)
      return mid;
    else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right])
        left = mid + 1;
      else
        right = mid - 1;
    } else {
      if (nums[left] <= target && target < nums[mid])
        right = mid - 1;
      else
        left = mid + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    let mid = (right + left) >>> 1
    if (nums[mid] < target) { //左边界
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

/** 二分法
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false
  let temp = []
  matrix.forEach(d => {
    temp.push(...d)
  })
  //console.log(temp)
  let left = 0
  let right = temp.length - 1
  while (left <= right) {
    let mid = (right + left) >>> 1
    if (temp[mid] == target) {
      return true
    } else if (temp[mid] < target) { //左边界
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = (right + left) >>> 1
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum == target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  nums.sort((a, b) => b - a)
  let count = 0
  let res = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    res += nums[i]
    count++
    if (res >= s) {
      return count
    }
  }
};

"abcabcbb"
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  let max = 0
  let queue = [] //滑动窗口
  for (let i = 0, len = s.length; i < len; i++) {
    if (queue.includes(s[i])) {
      while (queue.includes(s[i])) {
        queue.shift()
      }
    }
    queue.push(s[i])
    max = Math.max(max, queue.length)
  }
  return max;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  let n = s.length
  let dp = Array(n).fill(false).forEach((d, i, arr) => {
    arr[i] = Array(n).fill(false)
  });
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (s.charAt(i) == s.charAt(j) && (i - j <= 2 || dp[j + 1][i - 1]))
        dp[j][i] = true;
      if (dp[j][i] && (i - j + 1 > res.length)) {
        res = s.substring(j, i + 1);
      }
    }
  }
  return res;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = []
  let map = new Map()
  candidates.sort((a, b) => a - b)
  backtrack(candidates, target, res, 0, [], map)
  return res;
};

//选择列表，决策路径(难在决策路径怎么走，画树)
function backtrack(candidates, target, res, start, temp, map) {
  if (target == 0 && !map.has(temp.join(''))) {
    map.set(temp.join(''), 1)
    res.push(temp)
  } else {
    if (target < 0) {
      return
    }
    for (let i = start, len = candidates.length; i < len; i++) {
      temp.push(candidates[i])
      backtrack(candidates, target - candidates[i], res, i + 1, [...temp], map)
      temp.pop()
    }
  }
}
// console.log(combinationSum2([10,1,2,7,6,1,5], 8)) //[1,1,2,5,6,7,10]

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 贪婪算法，在有效的步骤内选最大的
  let len = nums.length
  let res = 0
  for (let i = 0; i < len; i++) {
    //到达最后一个, 当前的偏移量加上之前的走过的-1,判断大于等于就行
    console.log('111', nums[i] + i, len - 1)
    if (nums[i] + i >= len - 1) {
      res++
      break;
    } else {
      res++
      //偏移量内的最大值
      let arr = nums.slice(i + 1, nums[i] + 1)
      i = Math.max(...arr) - 1
      console.log('console.log(arr, i):', arr, i)
    }
  }
  return res;
};

// console.log(jump([2,3,1,1,4]))

var permuteUnique = function (nums) {
  //加一个map, 去重操作
  let res = []
  let seen = new Map();
  let backtrack = (nums, seen, arr, res, visited) => {
    if (arr.length == nums.length) {
      let str = arr.join('')
      if (!seen.has(str)) {
        // console.log(str)
        res.push(arr);
        seen.set(str, str)
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (visited[i] !== undefined) continue;
        arr.push(nums[i])
        visited[i] = i
        backtrack(nums, seen, [...arr], res, visited)
        arr.pop()
        delete visited[i]
      }
    }
  }
  backtrack(nums, seen, [], res, {})
  return res;
};

var rotate = function (matrix) {
  //先反转矩阵，1-n行变 n-1行。然后再ij对换
  let len = matrix.length
  if (!len) {
    return
  }
  matrix = matrix.reverse()
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (i != j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
    }
  }
  return matrix
};


var coinChange = function (coins, amount) {
  let res = amount + 1

  function dfs(coins, amount, count) {
    if (amount == 0) {
      res = Math.min(res, count)
    } else {
      for (let i = 0, len = coins.length; i < len; i++) {
        if (amount < 0) return;
        if (coins[i] > amount) continue;
        dfs(coins, amount - coins[i], count + 1)
      }
    }
  }
  dfs(coins, amount, 0)
  return res
};



var coinChange1 = function (coins, amount) {
  let maxNum = Number.MAX_VALUE
  let min = Math.min
  let dp = Array(amount + 1).fill(maxNum)
  dp[0] = 0; //代表金额为0的时候找零为0，边界。0 //金额为0不能由硬币组成
  for (let i = 0, len = coins.length; i < len; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      //关键点，dp[i - coins[j]] != Number.MAX_VALUE，取了这个银币之后还是正无穷，说明不可以取这个银币，不然不能组成找零钱
      if (dp[j - coins[i]] != maxNum) {
        dp[j] = min(dp[j], dp[j - coins[i]] + 1)
      }
    }
  }
  // console.log(dp)
  return dp[amount] == maxNum ? -1 : dp[amount];
};
// console.log(coinChange1([1, 2, 5], 11))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length - 1
  let lastPost = len
  for (let i = len; i >= 0; i--) {
    if (nums[i] + i >= lastPost) {
      lastPost = i
    }
  }
  return lastPost == 0
}
// console.log(canJump[3, 2, 1, 0, 4])

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = []
  let count = k
  let backtrack = (n, res, temp, k) => {
    if (k <= 0) return;
    if (temp.length == n) {
      res.push(temp)
      k--;
    } else {
      for (let i = 1; i <= n; i++) {
        if (temp.includes(i)) continue;
        temp.push(i)
        backtrack(n, res, [...temp], k)
        temp.pop()
      }
    }
  }
  backtrack(n, res, [], count)
  return res[k - 1].join('');
};

// console.log(getPermutation(3, 3))

const rotateRight = (head, k) => {
  if (!head) return null
  let curr = head,
    tmp = null,
    n = 0
  while (curr) {
    n++
    if (!curr.next) {
      curr.next = head
      break
    }
    curr = curr.next
  }
  k = k % n
  while (k++ < n) {
    k === n && (tmp = head)
    head = head.next
  }
  tmp.next = null
  return head
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  //边界是一行一列
  //子结构 dp[i][j], 表示串1的i到串2的j最少操作数
  //状态转移方程 s1[i] == s2[j], 跳过 dp[i][j] = dp[i-1][j-1]
  //            s1[i] != s2[j], dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
  //其中，dp[i-1][j-1] 表示替换操作，dp[i-1][j] 表示删除操作，dp[i][j-1] 表示插入操作。
  let m = word1.length
  let n = word2.length
  let min = Math.min
  let dp = Array(m + 1).fill(0)
  dp.forEach((d, i, arr) => {
    arr[i] = Array(n + 1).fill(0)
  })
  // 第一行，第一个单词没有，第二个单词有，全是增加操作
  for (let i = 1; i <= n; i++) {
    dp[0][i] = dp[0][i - 1] + 1
  }
  // 第一列，第二个单词没有，第一个单词有，全是删除操作
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + 1
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  // console.log(dp)
  return dp[m][n]
};

// console.log(minDistance("horse", "ros"))

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let res = [] //存待清除的行列
  let r = matrix.length
  let c = matrix[0].length
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] == 0) {
        res.push([i, j])
      }
    }
  }
  while (res.length) {
    let d = res.pop()
    clearRowAndCol(d[0], d[1], matrix)
  }
  return matrix
};

function clearRowAndCol(row, col, matrix) {
  let r = matrix.length
  let c = matrix[0].length
  for (let i = 0; i < c; i++) {
    matrix[row][i] = 0
  }
  for (let i = 0; i < r; i++) {
    matrix[i][col] = 0
  }
}

// console.log(setZeroes([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]))

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode1 = function (n) {
  let gray = (n) => {
    if (n == 1) {
      return ['0', '1']
    } else {
      let pre = gray(n - 1)
      let last = Math.pow(2, n) - 1
      let cur = []
      for (let i = 0, len = pre.length; i < len; i++) {
        cur[i] = `0${pre[i]}`
        cur[last - i] = `1${pre[i]}`
      }
      return cur
    }
  }
  let res = [0]
  if (n == 0) {
    return res
  }
  res = gray(n).map(d => parseInt(d, 2))
  return res;
};

var grayCode = function (n) {
  if (n == 0) {
    return [0]
  }
  let dp = Array(n).fill([])
  dp[0] = ['0']
  dp[1] = ['0', '1']
  // 边界：
  // dp[0] = ['0']
  // dp[1] = ['0', '1']
  // dp[2] = ['00', '01', '11', '10']
  // 转移方程：dp[i] 代表第i个数的格雷编码
  // dp[i] = {cur[i] = `0${pre[i]}`, cur[last - i] = `1${pre[i]}`} , i < pre.length, pre[i]代表当前的n - 1中一位格雷编码；
  let i = 2
  let preLen = dp[i - 1].length
  let last = Math.pow(2, i) - 1
  for (; i <= n; i++) {
    preLen = dp[i - 1].length
    last = Math.pow(2, i) - 1
    dp[i] = Array(last).fill(0)
    for (let j = 0; j < preLen; j++) {
      dp[i][j] = `0${dp[i - 1][j]}`
      dp[i][last - j] = `1${dp[i - 1][j]}`
    }
  }
  return dp[n].map(d => parseInt(d, 2));
};

console.log(grayCode(3))

// return s.replace(/\s+/g,' ').trim().split(' ').reverse().join(' ');

// return s.split(" ").filter( v => v!='').reverse().join(' ')

// queue.sort((a, b) => {
//   let key = Object.keys(a)[0]
//   let key1 = Object.keys(b)[0]
//   return a[key] - b[key1]
// })

let s = (numbers) => {
  return numbers.sort((a, b) => b[1] - a[1])
}

console.log(s([
  [3, 1],
  [2, 2],
  [1, 3]
]))


// 直接变成最长子串处理 arr[i][j] 为最大子串的长度
// 首先 i，j 始终指向子串的末尾字符。所以 j 指向的红色的 a 倒置前的下标是 beforeRev = length-1-j=4-1-2=1，
// 对应的是字符串首位的下标，我们还需要加上字符串的长度才是末尾字符的下标，
// 也就是 beforeRev+arr\[i][j]-1=1+3-1=3，因为 arr\[i][j] 保存的就是当前子串的长度，也就是图中的数字 3。
// 此时再和它与 i 比较，如果相等，则说明它是我们要找的回文串
var longestPalindrome = function (s) {
  if (!s)
    return "";
  let origin = s;
  let reverse = s.split('').reverse().join('');
  let length = s.length;
  let arr = Array(length).fill(0)
  arr.forEach((d, i, arr) => arr[i] = Array(length).fill(0))
  console.log(arr)
  let maxLen = 0;
  let maxEnd = 0;
  for (let i = 0; i < length; i++)
    for (let j = 0; j < length; j++) {
      if (origin[i] == reverse[j]) {
        if (i == 0 || j == 0) {
          arr[i][j] = 1;
        } else {
          arr[i][j] = arr[i - 1][j - 1] + 1;
        }
      }
      /**********修改的地方*******************/
      if (arr[i][j] > maxLen) {
        let beforeRev = length - 1 - j;
        if (beforeRev + arr[i][j] - 1 == i) { //判断下标是否对应
          maxLen = arr[i][j];
          maxEnd = i;
        }
        /*************************************/
      }
    }
  return s.substring(maxEnd - maxLen + 1, maxEnd + 1);
};

// console.log(longestPalindrome("cbbd"))

// 找左边界
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = (right + left) >>> 1
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left
}

//找右缩左
function binarySearch1(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = (right + left) >>> 1
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right
}
// console.log(binarySearch([0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9], 5))
// console.log(binarySearch1([0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9], 5))

// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

var decodeString = function (s) {
  let stack = []
  let res = ''
  let number = '0'
  let str = ''
  let isPush = false
  for (let i = 0, len = s.length; i < len; i++) {
    str = s[i]
    if (isNumber(str)) {
      number += str
    } else {
      if (str == '[') {

      } else if (str == ']') {

      } else {
        res += str
      }
    }
  }
};

function isNumber(n) {
  return isNaN(parseInt(n))
}

var largestNumber = function (arr) {
  if (arr.length == 1)
    return arr[0].toString();
  let flag = true;
  arr.sort((a, b) => {
    if (a != 0 || b != 0)
      flag = false;
    return (a.toString() + b.toString()) > (b.toString() + a.toString()) ? -1 : 1;
  })
  if (flag)
    return '0';
  return arr.join("");
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return buildTree(nums)
};

function buildTree(nums) {
  if (!nums.length) return
  if (nums.length == 1) {
    let root = new TreeNode(nums[0])
    return root
  }
  let idx = nums.indexOf(Math.max(...nums))
  let root = new TreeNode(nums[idx])
  if (idx == 0) {
    root.right = buildTree(nums.slice(idx + 1))
    root.left = null
  } else if (idx == nums.length - 1) {
    root.right = null
    root.left = buildTree(nums.slice(0, nums.length - 1))
  } else {
    root.left = buildTree(nums.slice(0, idx))
    root.right = buildTree(nums.slice(idx + 1))
  }
  return root
}

var maxDepthAfterSplit = function(seq) {
  let len = seq.length
  let res = Array(len).fill(0)
  let stack = []
  for(let i = 0; i < len; i++){
    //  debugger
     if(seq[i] == ')' && stack[stack.length - 1][0] == '('){
        let cur = stack.pop()
        res[i] = 1
        res[cur[1]] = 1  
     }else{
        stack.push([ seq[i], i]) 
     } 
  }
  return res
};

console.log(maxDepthAfterSplit("(()())"))
