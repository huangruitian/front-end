// 源数据， 业务场景，用户动态选择属性，生产一个表格
let arr = [
  { id: "color", value: ["1", "2"] },
  { id: "storage", value: ["A", "B"] },
  { id: "small", value: ["a", "b"] }
];
// 排列组合成这样
let tableData = [
  { color: "1", storage: "A", small: "a" },
  { color: "2", storage: "A", small: "a" }
];

// 思路
// id:value 抽出来做一个整体。item = 6
// 很明显是回溯算法，满足三个（一个坑挑一个），出现过 map 记录

// arr = [
//     { color:['1','2'] },
//     { storage:['A','B'] },
//     { small:['a','b'] }
// ]

let res = [];
arr = arr.map(item => ({ [item.id]: item.value }));

function backtrack(arr, tempObj, set, idx) {
  let str = Object.values(tempObj).join("");
  // 满足条件
  if (str.length === 3 && !set.has(str)) {
    set.add(str);
    res.push(tempObj);
  } else {
    // 剪枝
    if (idx >= arr.length) {
      return;
    }
    for (let i = idx; i < arr.length; i++) {
      let itemObj = arr[i];
      let key = Object.keys(itemObj)[0];
      let valuesArr = itemObj[key];
      for (let j = 0; j < valuesArr.length; j++) {
        let val = valuesArr[j];
        tempObj[key] = val;
        // 每组选一个
        backtrack(arr, { ...tempObj }, set, idx + 1);
        // 选完回溯
        delete tempObj[key];
      }
    }
  }
}
backtrack(arr, {}, new Set(), 0);

console.log(res);

// ==============================================================
let skuList = [
  {
    skuSaleAttributeList: [
      { attributeId: "66", attributeValues: "红" },
      { attributeId: "77", attributeValues: "大" },
      { attributeId: "88", attributeValues: "长" }
    ],
    skuId: "",
    skuEnName: "1111红大长",
    barcode: "",
    skuLocalName: "2222红大长",
    skuCostPrice: "",
    skuSalePrice: "",
    skuPic:
      "https://bluepms.oss-ap-southeast-1.aliyuncs.com/idntest/res/img/088f6be78773aa98f1843ffce9891a9.jpg"
  },
  {
    skuSaleAttributeList: [
      { attributeId: "66", attributeValues: "红" },
      { attributeId: "77", attributeValues: "大" },
      { attributeId: "88", attributeValues: "宽" }
    ],
    skuId: "",
    skuEnName: "1111红大宽",
    barcode: "",
    skuLocalName: "2222红大宽",
    skuCostPrice: "",
    skuSalePrice: "",
    skuPic:
      "https://bluepms.oss-ap-southeast-1.aliyuncs.com/idntest/res/img/bb10315d64e64bf8affa0e90d9c2771.jpg"
  }
];

let hash = new Map();
skuList
  .map(d => d.skuSaleAttributeList)
  .reduce((prev, cur) => prev.concat(cur))
  .forEach(({ attributeId, attributeValues }) => {
    if (!hash.has(attributeId)) {
      hash.set(attributeId, [attributeValues]);
    } else {
      let origin = hash.get(attributeId);
      if (!origin.includes(attributeValues)) {
        hash.set(attributeId, [...origin, attributeValues]);
      }
    }
  });
console.log(hash);

// let a = [...new Set([2, 2])]

// ==========================

