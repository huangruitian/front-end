/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-09-09 09:14:37
 * @LastEditors: hrt
 * @LastEditTime: 2019-09-10 14:45:36
 */
//递归类
//复原IP地址
var restoreIpAddresses = function (s) {
  let result = [] //储存结果
  if (s.length > 12 || s.length < 4) return result;
  //递归函数
  let search = (cur, sub) => {
    //最终的字符串和原来的字符串相等，并且是四段，就符合结果 
    if (cur.length === 4 && cur.join('') === s) {
      result.push(cur.join('.'))
    } else { //不符合结果就继续遍历
      let temp = ''
      for (let i = 0; i < Math.min(3, sub.length); i++) { //最大三位
        temp += sub[i] //取一位
        //限制不能大于256
        if (temp > 255) {
          break
        }
        //第一位不能为0
        if (temp.length > 1 && temp.charAt(0) == '0') {
          break
        }
        search(cur.concat([temp]), sub.substr(i + 1))
      }
    }
  }
  search([], s)
  return result
};
//秒！tql
var restoreIpAddresses = function (s) {
  let result = [];
  handler(s, result, [], 0, 0)
  return result;
};

function handler(s, result, tmp, idx, curr) { // 0 0
  if (curr === 4) { //如果当前
    if (idx === s.length) result.push(tmp.join("."))
    return
  }

  let n = ""
  for (let i = 0; idx + i < s.length && i < 3; i++) {
    let t = [...tmp];
    n += s[idx + i]
    if (Number(n) > 255) break;
    t.push(n)
    handler(s, result, t, idx + i + 1, curr + 1)
    if (n === "0") break;
  }
}

// 串联所有单词的子串, words 每个单词长度相同
// 排列组合得出所有的子串，再逐个匹配(下面是排列组合的过程)
// [A] [BC] --> ([A] [BC]) --> [B] [C] --> ([AB][C]) --> [ABC] 
// [B] [AC]                    [C] [B]
// [C] [AB]
// 递归求出所有的子串
var findSubstring = function (s, words) {
  let result = []
  let wLen = words.length
  let range = (cur, sub) => {
    if (cur.length == wLen) {
      result.push(cur)
    } else {
      sub.map((d, idx) => {
        let temp = [].concat(sub)
        temp.splice(idx, 1) //剔除第一个剩下的
        range(cur.concat(d), temp)
      })
    }
  }
  range([], words) //得到所有的子串
  return result.map((d, idx) => {
    return s.indexOf(d.join(''))
  }).filter(d => d != -1).sort()
};
// 优化？
var findSubstring = function (s, words) {
  let res = []
  let wLen = words.length
  let sLen = s.length
  if (sLen == 0 || wLen == 0) return res;
  let result = []
  let range = (cur, sub) => {
    if (cur.length == wLen) {
      //得到子串在判断位置
      result.push(cur)
    } else {
      sub.map((d, idx) => {
        let temp = [].concat(sub)
        temp.splice(idx, 1) //剔除第一个剩下的
        range(cur.concat(d), temp)
      })
    }
  }
  range([], words) //得到所有的子串
  for (let i = 0; i < sLen; i++) {
    let temp = result.map(d => s.indexOf(d.join(''), i))
    res = res.concat(temp)
  }
  return [...new Set(res.filter(d => d != -1))]
};
// 滑动窗口做  【串联所有单词的子串】
// 窗口的大小为words[0].length * words.length
// 用窗口在s上滑动，滑动一位就检测相不相等，如果相等，记录窗口的起始位置
// "ababaab"
// ["ab","ba","ba"] 超时！
var findSubstring = function (s, words) {
  let sLen = s.length;
  let wLen = words.length;
  let res = []
  if (sLen == 0 || wLen == 0) {
    return res;
  }
  let len = words[0].length; //单个单词大小
  for (let i = 0; i < sLen; i++) { //大窗口滑动
    debugger
    //依次检测四个单词在不在里面(在窗口里检测)
    let temp = s.substr(i, wLen * len) //滑动窗口
    let wds = [].concat(words)
    if (temp.length < wLen * len) {
      break;
    }
    for (let j = 0; j < temp.length; j += len) {
      let item = temp.substr(j, len) //顺序取每个单词
      //检测数组存不存在一个子串
      //  wds = wds.filter(d => d != item)
      let idx = wds.indexOf(item)
      if (idx != -1) {
        wds.splice(idx, 1)
      }
    }
    if (wds.length == 0) {
      res.push(i)
    }
  }
  return res;
}


// 因为单词长度固定的，我们可以计算出截取字符串的单词个数是否和 words 里相等，所以我们可以借用哈希表。
// 一个是哈希表是 words，一个哈希表是截取的字符串，比较两个哈希是否相等！
// 因为遍历和比较都是线性的，所以时间复杂度：O(n^2)
// hash方法
var findSubstring = function (s, words) {
  let res = [];
  if (s == null || s.length == 0 || words == null || words.length == 0) return res;
  let map = {};
  let one_word = words[0].length;
  let word_num = words.length;
  let all_len = one_word * word_num;
  // words 的 map
  for (let i = 0; i < word_num; i++) { 
    let key = words[i]
    if (!map[key]) {
      map[key] = 1
    } else {
      map[key] += 1
    }
  }
  //判断两个对象是不是相等
  let isMapEquals = (wds_map, s_map) => {
    for (let key in wds_map) {
      if (s_map[key] !== wds_map[key]) {
        return false
      }
    }
    return true
  }
  //
  for (let i = 0; i < s.length - all_len + 1; i++) { //递归s
    // debugger
    let tmp = s.substr(i, i + all_len); //拿到每个子串
    let tmp_map = {};
    for (let j = 0; j < all_len; j += one_word) {
      let key = tmp.substr(j, one_word); //拿到子串里面的每个key, 再map
      if (!tmp_map[key]) {
        tmp_map[key] = 1
      } else {
        tmp_map[key] += 1
      }
    }
    //此时得到两个map，比较它们就好了
    if (isMapEquals(map, tmp_map)) {
      res.push(i);
    }
  }
  return res;
}
// findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])