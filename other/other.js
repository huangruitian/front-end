/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-08-22 15:45:24
 * @LastEditors: hrt
 * @LastEditTime: 2019-08-24 18:06:04
 */
// var arr = [{
//     id: 1,
//     children: [{
//       id: 2,
//       children: [{
//         id: 121
//       }, {
//         id: 10
//       }]
//     }]
//   },
//   {
//     id: 4
//   }
// ]

// //扁平化？
// const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

// let max = 1;

// function getMaxId1(arr) {
//   arr.filter((d, i, arr) => {
//     d.id > max ? max = d.id : null;
//     d.children ? getMaxId1(d.children) : null
//   })
// }
// getMaxId1(arr)

// // let max = getMaxId(arr, 7);
// function getMaxId(arr, maxId) {
//   if (!arr.length) {
//     return maxId;
//   }
//   let len = arr.length - 1;
//   for (; len >= 0; len--) {
//     if (arr[len].id > maxId) {
//       maxId = arr[len].id
//     }
//     if (arr[len].children) {
//       maxId = getMaxId(arr[len].children, maxId)
//     }
//   }
//   return maxId;
// }

// console.log(max)

// //判断是不是数字字符串
// function isNumeric(s) {
//   if (s == undefined || s == false) {
//     return false;
//   }
//   let hasPoint = false;
//   let hasExp = false;
//   for (let i = 0; i < s.length; i++) {
//     const target = s[i]; 
//     if (target >= 0 && target <= 9) {
//       continue;
//     } else if (target === 'e' || target === 'E') {
//       if (hasExp || i === 0 || i === s.length - 1) {
//         return false;
//       } else {
//         hasExp = true;
//         continue;
//       }
//     } else if (target === '.') {
//       if (hasPoint || hasExp || i === 0 || i === s.length - 1) {
//         return false;
//       } else {
//         hasPoint = true;
//         continue;
//       }
//     } else if (target === '-' || target === '+') {
//       if (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E') {
//         continue;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// ============================================
// 源数据， 业务场景，用户动态选择属性，生产一个表格
let arr = [{
    id: 'color',
    value: ['1', '2']
  },
  {
    id: 'storage',
    value: []
  },
  {
    id: 'small',
    value: ['a', 'b']
  }
]
// 排列组合成这样
let tableData = [{
    color: "1",
    storage: "A",
    small: "a"
  },
  {
    color: "2",
    storage: "A",
    small: "a"
  },
]

// 思路
// id:value 抽出来做一个整体。item = 6
// 很明显是回溯算法，满足三个（一个坑挑一个），出现过 map 记录

// arr = [
//     { color:['1','2'] },
//     { storage:['A','B'] },
//     { small:['a','b'] }
// ]

const getPhoneList = (arr) => {
  const res = []
  arr = arr.map(item => ({
      [item.id]: item.value
    }))
    .filter(item => {
      const key = Object.keys(item)[0]
      if (item[key].length) {
        return true
      }
      return false
    })
  const backtrack = (arr, tempObj, set, idx) => {
    let str = Object.values(tempObj).join('')
    // 加入条件   
    if (str.length === arr.length && !set.has(str)) {
      set.add(str)
      res.push(tempObj)
    } else {
      // 剪枝
      if (idx >= arr.length) {
        return
      }
      for (let i = idx; i < arr.length; i++) {
        let itemObj = arr[i]
        let key = Object.keys(itemObj)[0]
        let valuesArr = itemObj[key]
        for (let j = 0; j < valuesArr.length; j++) {
          let val = valuesArr[j]
          tempObj[key] = val
          // 每组选一个
          backtrack(arr, {
            ...tempObj
          }, set, idx + 1)
          // 选完回溯
          delete tempObj[key]
        }
      }
    }
  }
  backtrack(arr, {}, new Set(), 0)
  return res
}


console.log(getPhoneList(arr))

// ==============================================================
// let skuList = [
//   {
//     skuSaleAttributeList: [
//       { attributeId: "66", attributeValues: "红" },
//       { attributeId: "77", attributeValues: "大" },
//       { attributeId: "88", attributeValues: "长" }
//     ],
//     skuId: "",
//     skuEnName: "1111红大长",
//     barcode: "",
//     skuLocalName: "2222红大长",
//     skuCostPrice: "",
//     skuSalePrice: "",
//     skuPic:
//       "https://bluepms.oss-ap-southeast-1.aliyuncs.com/idntest/res/img/088f6be78773aa98f1843ffce9891a9.jpg"
//   },
//   {
//     skuSaleAttributeList: [
//       { attributeId: "66", attributeValues: "红" },
//       { attributeId: "77", attributeValues: "大" },
//       { attributeId: "88", attributeValues: "宽" }
//     ],
//     skuId: "",
//     skuEnName: "1111红大宽",
//     barcode: "",
//     skuLocalName: "2222红大宽",
//     skuCostPrice: "",
//     skuSalePrice: "",
//     skuPic:
//       "https://bluepms.oss-ap-southeast-1.aliyuncs.com/idntest/res/img/bb10315d64e64bf8affa0e90d9c2771.jpg"
//   }
// ];

// let hash = new Map();
// skuList
//   .map(d => d.skuSaleAttributeList)
//   .reduce((prev, cur) => prev.concat(cur))
//   .forEach(({ attributeId, attributeValues }) => {
//     if (!hash.has(attributeId)) {
//       hash.set(attributeId, [attributeValues]);
//     } else {
//       let origin = hash.get(attributeId);
//       if (!origin.includes(attributeValues)) {
//         hash.set(attributeId, [...origin, attributeValues]);
//       }
//     }
//   });
// console.log(hash);

// let a = [...new Set([2, 2])]

// ==========================
// 2020-3-17 面试
// 输入
// They are students. 
// aeiou

// 输出
// Thy r stdnts.

const deleteFlagStr = (origin = "They are students.", target = "aeiou") => {
  const hash = new Set()
  let result = ''
  for (let i = 0; i < target.length; i++) {
    hash.add(target[i])
  }
  for (let i = 0; i < origin.length; i++) {
    if (!hash.has(origin[i])) {
      result += origin[i]
    }
  }
  return result
}

let arrStr = [
  ["今", "天", "上", "一", "新", "影"],
  ["晚", "我", "起", "上", "《", "》"],
  ["们", "去", "映", "流", "好", "听"],
  ["看", "的", "浪", "不", "小", "非"],
  ["电", "地", "好", "李", "常", "得"],
  ["球", "？", "说", "值", "看", "！"]
]
const getStr = (arr = arrStr) => {
  let result = ''
  let row = arr.length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j <= i; j++) {
      result += arr[j][i - j]
    }
  }
  for (let i = 1; i < row; i++) {
    let k = 0
    for (let j = row - 1; j >= i; j--) {
      // console.log(i,j)
      result += arr[i + k][j]
      k++
    }
  }
  return result
}


const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 跳过重复数字
    if (i && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left++], nums[right--]]);
        // 跳过重复数字
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        // 跳过重复数字
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
}


// 最大值，没一行选一个，列不能相同
let R = [
  [4, 1, 1, 3],
  [1, 1, 3, 1],
  [1, 3, 1, 1],
  [3, 1, 1, 3],
]
let result = 0

function backtrack(arr, sum, set, idx) {
  const Len = arr.length;
  // 加入条件   
  if (idx === Len) {
    result = result > sum ? result : sum
  } else {
    for (let i = idx; i < Len; i++) {
      for (let j = 0; j < Len; j++) {
        if (set.has(j)) continue;
        set.add(j)
        sum += arr[i][j]
        // 每组选一个
        backtrack(arr, sum, set, idx + 1)
        // 选完回溯
        sum -= arr[i][j]
        set.delete(j)
      }
    }
  }
}
backtrack(R, 0, new Set(), 0)

// 斜线枚举矩阵 
function enumMartrix(){
  let martrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  let n = martrix.length
  let res = []
  let x = 0
  let y = n - 1
  while(y >= 0 && x < n){
    // 如何控制走呢？
    let tempX = x
    let tempY = y
    // 控制斜线走呗
    while(tempX < n && tempY < n){
      res.push(martrix[tempX++][tempY++])
    }
    // 当 x < y  时, y -= 1; 往前拉
    // 当 x >= y 时, x += 1; 往下推
    if(x < y){
      y -= 1
    }else{
      x += 1
    } 
  }
  return res
}
