/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-25 09:52:46
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 10:10:55
 */

//这里只考虑数组和字符串的情况,数组的比较简单
const myIndexOf = (origin, target) => {
  const ans = -1
  const len = origin.length
  if (Array.isArray(origin)) {
    for (let i = 0; i < len; i++) {
      if (target === origin[i]) {
        return i;
      }
    }
  } else {
    const tLen = target.length
    let count = 0
    for (let i = 0; i < len; i++) {
      while (count < tLen && target[count] === origin[i]) {
        count++
      }
      if (count && count === tLen) {
        return i;
      } else {
        count = 0
      }
    }
  }
  return ans
}

// console.log(myIndexOf('assddasd', 'd'))

var minSubArrayLen = function (s, nums) {
  //滑动窗口，滑呀滑
  //当窗口内的值小于s, 右边界扩张
  //当窗口的值大于等于s, 左边界扩张
  let n = nums.length;
  let ans = Number.MAX_VALUE;
  let left = 0; //左指针
  let sum = 0; //右指针
  for (let i = 0; i < n; i++) {
      sum += nums[i];    //加进结果
      while (sum >= s) { //满足条件
          ans = Math.min(ans, i + 1 - left);
          sum -= nums[left++];
      }
  }
  return (ans != Number.MAX_VALUE) ? ans : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
