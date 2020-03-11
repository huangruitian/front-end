/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-09-03 09:06:34
 * @LastEditors: hrt
 * @LastEditTime: 2019-10-10 15:38:18
 */
//反转字符串的单词
// wo shi shui -> ow ihs iuhs(空格只在单词中间)
var reverStr = function (str) {
  let arr = str.split(' ');
  let result = arr.map((item) => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
var reverStr1 = function (str) {
  let result = ''
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || i == str.length - 1) {
      result += stack.join('')
      stack.length = 0;
    } else {
      stack.unshift(str[i])
    }
  }
}
//计算二进制子串s
//重复的子字符串 s+s,掐头去尾留中间，indexOf(s) != -1 还存在s，则成立




//最长字符不重复字符串(滑动窗口)
// 这道题主要用到思路是：滑动窗口
// 什么是滑动窗口？
// 其实就是一个队列,比如例题中的 abcabcbb，进入这个队列（窗口）为 abc 满足题目要求，
// 当再进入 a，队列变成了 abca，这时候不满足要求。所以，我们要移动这个队列！
// 如何移动？
// 我们只要把队列的左边的元素移出就行了，直到满足题目要求！
// 一直维持这样的队列，找出队列出现最长的长度时候，求出解！
// var str = 'abckadeslgs'

// var str = 'abckadeslgs'
function getMaxStr1 (s) {
  var max = 0, i = 0;
  var temp = []; //滑动窗口
  while (i < s.length) {
    if (temp.indexOf(s[i]) > -1) { //窗口内有该字符
      temp.shift(); //出队
      continue; //中断不让i++, 继续以目标值把窗口弹到不包含重复项
    }
    temp.push(s[i]); //增大窗口
    //一直维护窗口大小
    max = Math.max(max, temp.length);
    i++;
  }
  return max;
};


// 尝试用两个指针
// 维持一个左子针left和一个右子针right。right-left就是无重复子串的长度。遍历规律为，
// 没有重复的话，right向右移动一位。
// 有重复的话，left右移并更新最长字符串max的值，右移一直到滑动窗口内无重复字符。

var str = 'abckbdeslgs'
var getMaxStr = function (s) {
  let max = 0;
  let l = 0, r = 0; //开始指针结束指针
  let map = new Map()
  for (r; r < s.length; r++) {
    if (map.has(s[r])) { 
      //相同了左指针向前移到第一个重复的下一位
      l = Math.max(l, map.get(s[r]))
    }
    max = Math.max(max, r - l + 1)
    map.set(s[r], r + 1)// key - len
  }
  return max;
};

console.log(getMaxStr(str))