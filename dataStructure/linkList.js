/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-08-23 09:36:46
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-12 17:09:21
 * 手动创建链表，链表排序，环形链表 三个必学
 */

//输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
// function printListFromTailToHead(head) {
//   let ArrayList = [];
//   while (head) {
//     ArrayList.unshift(head.val) //每次都把后面的插前面
//     head = head.next //指向下一个节点（地址）
//   }
//   return ArrayList;
// }

// //输入一个链表，反转链表后，输出新链表的表头。
// // 以链表的头部节点为基准节点
// // 将基准节点的下一个节点挪到头部作为头节点
// // 当基准节点的next为null，则其已经成为最后一个节点，链表已经反转完成
// // 1.next --> 2.next --> 3.next --> null
// // 2.next --> 1.next --> 3.next --> nul
// // 2.next --> 3.next --> 1.next --> null
// var reverseList = function (head) {
//   let currentNode = null;
//   let headNode = head;
//   while (head && head.next) {
//     currentNode = head.next //拿到第二个节点
//     head.next = currentNode.next //第一个节点指向第三个节点，因为这样做防止指针丢失
//     currentNode.next = headNode //拿出的第二个节点指向链表，当作头节点
//     headNode = currentNode //更新头节点
//   }
//   return headNode;
// };

// // 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// function Merge(pHead1, pHead2) {
//   if (!pHead1) {
//     return pHead2;
//   }
//   if (!pHead2) {
//     return pHead1;
//   }
//   let head; //创建一个head
//   if (pHead1.val > pHead2.val) {
//     head = pHead2; //取小的头节点
//     head.next = Merge(pHead1, pHead2.next); //递归取最小的
//   } else {
//     head = pHead1;
//     head.next = Merge(pHead1.next, pHead2);
//   }
//   return head; //返回小的节点
// }

// // 输入一个链表，输出该链表中倒数第k个结点。
// // 简单思路： 循环到链表末尾找到 length 在找到length-k节点 需要循环两次。
// // 优化：
// // 设定两个节点，间距相差k个节点，当前面的节点到达终点，取后面的节点。
// // 前面的节点到达k后，后面的节点才出发。
// // 代码鲁棒性： 需要考虑head为null，k为0，k大于链表长度的情况。
// function FindKthToTail(head, k) {
//   if (!head || !k) return null
//   let front = head; //开始指针
//   let behind = head; //第k个开始指针
//   let index = 1; //统计
//   while (front.next) {
//     index++;
//     front = front.next;
//     if (index > k) {
//       behind = behind.next;
//     }
//   }
//   return (k <= index) && behind; //防止k大于length
// }

// // 输入两个链表，找出它们的第一个公共结点。
// // 1.先找到两个链表的长度length1、length2
// // 2.让长一点的链表先走length2-length1步，让长链表和短链表起点相同
// // 3.两个链表一起前进，比较获得第一个相等的节点
// // 时间复杂度O(length1+length2) 空间复杂度O(0)

// function FindFirstCommonNode(pHead1, pHead2) {
//   if (!pHead1 || !pHead2) {
//     return null;
//   }
//   let length1 = getLength(pHead1);
//   let length2 = getLength(pHead2);

//   let lang, short, interval; //长,短,步伐
//   if (length1 > length2) {
//     lang = pHead1;
//     short = pHead2
//     interval = length1 - length2
//   } else {
//     lang = pHead2;
//     short = pHead1
//     interval = length2 - length1
//   }
//   //先让长的走interval步再一起开始
//   while (interval--) {
//     lang = lang.next
//   }
//   //一起开始
//   while (lang) {
//     if (lang === short) {
//       return lang;
//     }
//     lang = lang.next
//     short = short.next
//   }
//   return null
// }

// function getLength(p) {
//   if (p) {
//     return null
//   }
//   let result = 0;
//   while (p.next) {
//     result++;
//     p = p.next
//   }
//   return result
// }

// /**
//  * 合并两个有序链表
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  * 输入：1->2->4, 1->3->4
//  * 输出：1->1->2->3->4->4
//  */
// var mergeTwoLists = function (l1, l2) {
//   let res = new ListNode(-1);
//   let pev = res
//   while (l1 != null && l2 != null) {
//     if (l1.val <= l2.val) {
//       pev.next = l1 //因为每次都要拼接一个node
//       l1 = l1.next
//     } else {
//       pev.next = l2
//       l2 = l2.next
//     }
//     pev = pev.next
//   }
//   pev.next = l1 == null ? l2 : l1
//   return res = res.next; //因为pev走到头了，要多用一个链表表示结果
// };

// /** 148. 排序链表(归并排序，分治)
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var sortList = function (head) {
//   if (!head) return
//   let arr = []
//   let res = null
//   while (head) {
//     arr.push(head)
//     head = head.next
//   }
//   arr.sort((a, b) => {
//     return a.val - b.val
//   })
//   res = arr.unshift()
//   while (arr.length) {
//     res.next = arr.unshift()
//   }
//   return res
// };

// /**83
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var hasCycle = function (head) {
//   if (head == null || head.next == null) return false;
//   let m = head;
//   let k = head.next
//   while (k != m) {
//     if (k == null || k.next == null) {
//       return false
//     }
//     m = m.next
//     k = k.next.next
//   }
//   return true
// };

// /** 160
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
// var getIntersectionNode = function (headA, headB) {
//   let map = new Map()
//   while (headA) {
//     if (!map.has(headA)) {
//       map.set(headA, headA)
//     }
//     headA = headA.next
//   }
//   while (headB) {
//     if (map.has(headB)) {
//       return headB
//     }
//     headA = headA.next
//   }
//   return null
// };

// /** 203
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} val
//  * @return {ListNode}
//  */
// var removeElements = function (head, val) {
//   if (head == null)
//     return null;
//   head.next = removeElements(head.next, val);
//   if (head.val == val) {
//     return head.next;
//   } else {
//     return head;
//   }
// };

// /** 206 反转链表
//  *  输入: 1->2->3->4->5->NULL ->     2->3->4->5->NULL
//  *                                   1->NULL
//  *  输出: 5->4->3->2->1->NULL
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function (head) {
//   if (head == null) {
//     return null;
//   }
//   let cur = head;
//   let pre = null;
//   while (cur) {
//     let temp = cur.next //2->3->4->5->NULL
//     cur.next = pre // 2->3->4->5->NULL  1->NULL
//     //继续下一个
//     pre = cur //pre = 1, cur = 1
//     //断了要接回来, 继续下一轮
//     cur = temp //pre = 1, cur = 2
//   }
//   return pre //最后反转到5了  
// };

// /** 237
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} node
//  * @return {void} Do not return anything, modify node in-place instead.
//  */
// var deleteNode = function (node) {
//   let pre = new ListNode(Infinity)
//   let cur = head
//   while (cur) {
//     if (cur == node) {
//       pev.next = cur.next
//     } else {
//       pre = cur
//     }
//     cur = cur.next
//   }
//   pre = pre.next
// };

// /** 19
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function (head, n) {
//   //用两个指针 n = 2.
//   //快指针先走 n 步，慢指针再走 [1] 1
//   if (!head) return head;
//   let temp = new ListNode(0)
//   temp.next = head
//   let fast = temp
//   let slow = temp
//   while (n > 0) {
//     n--
//     fast = fast.next
//   }
//   while (fast) {
//     fast = fast.next
//     slow = slow.next
//   }
//   slow.next = slow.next.next
//   return temp.next
// };

// /** 23
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function (lists) {
//   let arr = []
//   lists.forEach(d => {
//     while (d) {
//       arr.push(d.val)
//       d = d.next
//     }
//   })
//   arr.sort((a, b) => a - b)
//   //组装回去
//   let head = new ListNode();
//   let temp = head
//   arr.forEach(d => {
//     let node = new ListNode(d);
//     temp.next = node
//     temp = temp.next
//   })
//   return head.next
// };

// /** 24
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function (head) {
//   if (!head && !head.next) return head
//   let temp = head.next
//   head.next = swapPairs(head.next.next)
//   temp.next = temp
//   return temp
// };

// /** 82
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var deleteDuplicates = function (head) {
//   let hash = new Map()
//   while (head) {
//     if (!hash.has(head.val)) {
//       hash.set(head.val, 1)
//     } else {
//       hash.set(head.val, hash.get(head.val) + 1)
//     }
//   }
//   let head = new ListNode(null)
//   let root = head
//   for ([key, val] of hash) {
//     if (val == 1) {
//       head.next = new ListNode(key)
//       head = head.next
//     }
//   }
//   return root.next
// };

// /** 148
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var sortList = function (head) {
//   if (!head) return
//   let arr = []
//   let res = new ListNode(null)
//   let root = res
//   while (head) {
//     arr.push(head.val)
//     head = head.next
//   }
//   arr.sort((a, b) => a - b)
//   while (arr.length) {
//     let node = new ListNode(arr.shift())
//     res.next = node
//     res = res.next
//   }
//   return root.next
// };



/*
 * 手动创建链表，链表排序，环形链表 三个必学
 * 总结：链表很多题目都可以用快慢指针、借助数组、哈希来做。
 * 在做的时候递归往往是最好理解和简洁的。同时在做题的时候要注意指针引用的问题；
 */

// var reverseList = function (head) {
//   //迭代和递归
//   if (!head) return
//   let cur = head
//   let pre = null
//   while (cur) {
//     let next = cur.next // null 1->[2]->
//     // 反转
//     cur.next = pre
//     // 下一个
//     pre = cur
//     cur = next
//   }
//   return pre
// };

// var reverseList = function (head) {
//   //递归
//   if (!head || !head.next) return head;
//   let new_head = reverseList(head.next)
//   let next_node = head.next
//   next_node.next = head
//   head.next = null
//   return new_head
// };

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   let pre = new ListNode(null)
//   let cur = pre
//   let carry = 0
//   while (l1 || l2) {
//     let x = l1 ? l1.val : 0
//     let y = l2 ? l2.val : 0
//     let sum = x + y + carry
//     carry = Math.floor(sum / 10)
//     sum = sum % 10;
//     cur.next = new ListNode(sum)
//     cur = cur.next
//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
//   }
//   if (carry) {
//     cur.next = new ListNode(carry)
//   }
//   return pre.next;
// };

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function (x) {
//   let res = ''
//   let arr = ('' + x).split('')
//   let tag = false
//   if (arr[0] == '-') {
//     tag = true
//     arr.shift()
//   }
//   arr.reverse()
//   arr.forEach(d => res += d)
//   res = tag ? 0 - Number(res) : Number(res)
//   return res >= Math.pow(2, 31) - 1 || res <= -Math.pow(2, 31) ? 0 : res
// };

// /**
//  * @param {string} str
//  * @return {number}
//  */
// var myAtoi = function (str) {
//   str = str.trim()
//   let number = parseInt(str)
//   if (isNaN(number)) return 0;
//   if (number >= Math.pow(2, 31) - 1)
//     number = Math.pow(2, 31) - 1
//   if (number <= -Math.pow(2, 31))
//     number = -Math.pow(2, 31)
//   return number
// };

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// // var isPalindrome = function (x) {
// //   let x = x + ''
// //   let reverse = x.split('').reverse().join('')
// //   let idx = 0
// //   while (idx < x.length) {
// //     if (x[idx] != reverse[idx]) {
// //       return false
// //     }
// //   }
// //   return true
// // };

// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function (num) {
//   let numberMap = {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     9: 'IX',
//     10: 'X',
//     40: 'XL',
//     50: 'L',
//     90: 'XC',
//     100: 'C',
//     400: 'CD',
//     500: 'D',
//     900: 'CM',
//     1000: 'M'
//   }
//   let keys = Object.keys(numberMap)
//   let res = ''
//   let i = keys.length - 1
//   while (num != 0) {
//     // debugger
//     if (i < 0) {
//       i = keys.length - 1
//     }
//     if (num >= keys[i]) {
//       num -= keys[i]
//       res += numberMap[keys[i]]
//     } else {
//       i--
//     }
//   }
//   return res
// };
// intToRoman(3)

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   let res = ''
//   let pre = strs[0]
//   let idx = 0
//   for (let i = 1; i < strs.length; i++) {
//     if (i > 1 && !res) {
//       return ''
//     }
//     while (idx < strs[i].length && idx < strs[i - 1].length) {
//       let cur = strs[i]
//       if (cur[idx] == pre[idx]) {
//         res += cur[idx]
//         idx++
//       } else {
//         break
//       }
//     }
//     idx = 0
//     pre = strs[i]
//   }
// };

// /** 4数之和
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
// var fourSum = function (nums, target) {
//   if (nums.length < 4) {
//     return [];
//   }
//   let res = []
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 3; i++) {
//     //前一位等于后一位，相等中断
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     //后面的都不可能比目标值大了
//     if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
//       break;
//     }
//     //第二位开始
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       //相等中断
//       if (j > i + 1 && nums[j] == nums[j - 1]) {
//         continue
//       }
//       let left = j + 1; //第三位
//       let right = nums.length - 1; //第四位
//       while(left < right){
//         const sum = nums[i] + nums[j] + nums[left] + nums[right]
//         if (sum === target) {
//           res.push([nums[i], nums[j], nums[left], nums[right]])
//         }
//         if (sum <= target) {
//           while (nums[left] == nums[++left]) {}
//         } else {
//           while (nums[right] == nums[--right]) {}
//         }
//       }
//     }
//   }
//   return res
// };
// // [-2, -1, 0, 0, 1, 2]
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

// /** 27
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//     let i = 0
//     while(i < nums.length){
//       if(nums[i] == val){
//         nums.splice(i, 1)
//       }else{
//         i++
//       }
//     }
//    return nums.length 
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** 141.环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
// 时间：O(n), 空间：O(1)
var hasCycle = function (head) {
  let fast = head //快指针
  let slow = head //慢指针
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      return true
    }
  }
  return false
};

/** 206.反转链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 时间：O(n), 空间：O(1)
var reverseList = function (head) {
  let cur = head
  let pre = null
  let nex = null
  while (cur) {
    //保存下一个
    nex = cur.next
    //反转
    cur.next = pre
    //继续下一个
    pre = cur
    cur = nex
  }
  return pre
};
// 时间：O(n), 空间：O(n), 迭代优于递归
var reverseList = function (head) {
  if (!head || !head.next) return head
  let new_head = reverseList(head.next)
  let next_node = head.next
  //下一个节点指向前一个
  next_node.next = head
  //当前节点置空
  head.next = null
  return new_head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 时间：O(n), 空间：O(1)
var removeNthFromEnd = function (head, n) {
  let fast = head;
  //快指针先走n
  while (n > 0) {
    fast = fast.next
    n--
  }
  //如果n刚好是空，说明n等于链表长度
  if (!fast) return head.next
  let slow = head
  //快慢指针一起走
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  //删除
  slow.next = slow.next.next
  return head
};

// 链表有没有环入口
// 声明两个指针 P1 P2
// 1.判断链表是否有环： P1 P2 从头部出发，P1走两步，P2走一步，如果可以相遇，则环存在
// 2.从环内某个节点开始计数，再回到此节点时得到链表环的长度 length
// 3.P1、P2 回到head节点，让 P1 先走 length 步 ，当P2和P1相遇时即为链表环的起点

function EntryNodeOfLoop(pHead) {
  let p1 = pHead
  let p2 = pHead
  //1.假设存在环
  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next.next
  }
  //2.获取环长度
  let length = 1
  let temp = p1.next
  while(temp != p1){
    length++
    temp = temp.next
  }
  //3.P1、P2 回到head节点
  p1 = p2 = pHead
  while(length > 0){
    length--;
    p1 = p1.next
  }
  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1
}


var partition = function(head, x) {
  let p1 = new ListNode(null)
  let p2 = new ListNode(null)
  let res = p1
  let cur = head
  while(cur){  
    if(cur.val < x){
      p1.next = new ListNode(cur.val)
      p1 = p1.next
    }else{
      p2.next = new ListNode(cur.val)
      p2 = p2.next
    }
    cur = cur.next
  }
  p1.next = p2.next
  return res.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }
  let P1 = head.next;
  let P2 = head.next.next;
  // 1.判断是否有环
  while (P1 != P2) {
    if (P2 === null || P2.next === null) {
      return null;
    }
    P1 = P1.next;
    P2 = P2.next.next;
  }
  // 2.获取环的长度
  let temp = P1;
  let length = 1;
  P1 = P1.next;
  while (temp != P1) {
    P1 = P1.next;
    length++;
  }
  // 3.找公共节点
  P1 = P2 = head;
  while (length-- > 0) {
    P2 = P2.next;
  }
  let idx = 0
  while (P1 != P2) {
    idx++
    P1 = P1.next;
    P2 = P2.next;
  }
  return idx;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if(!head) return head
};
