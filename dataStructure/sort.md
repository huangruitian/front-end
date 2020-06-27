## 排序算法
### 原地排序法
- 不需要额外的内存
1. 选择排序
抽象出一个挡板，左边已排序，右边位未排序，每次选最小的和未排序的第一个交换
```js
const selectSort = (nums = [1,5,9,7,5,3,4,6,8,2]) => {
   let n = nums.length
   let min = 0
   for(let i = 0; i < n; i++){
     min = i; //默认当前最小
     for(let j = i+1; j < n; j++){
       // 找到后面最小的元素  
       if(nums[min] > nums[j]){
         min = j
       }
     }
     //本身就是最小，不用交换了  
     if(min != i){
         let temp = nums[i]
         nums[i] = nums[min]
         nums[min] = temp
     } 
   }
   return nums
}
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定
```
2. 插入排序
- 就类比我们打扑克牌，在整理牌的时候，总喜欢找大的插小的后面
- 与选择排序一样，抽象一个挡板，左边是已排序，右边是未排序
```js
const insertSort = (nums = [1,5,9,7,5,3,4,6,8,2]) => {
   let n = nums.length
   let target = 0
   for(let i = 1; i < n; i++){
     target = i
     //找前面小的插  
     for(let j = i - 1; j >= 0; j--){  
       if(nums[j] > nums[target]){
          swap(j, target, nums)
          target = j
       }
     }
   }
   return nums
}
function swap(i, j, nums){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 稳定性：稳定
```
3. 希尔排序
- 了解即可
```js
const shellSort = (arrays = [1,5,9,7,5,3,4,6,8,2]) => {
    //增量每次都/2
    for (let step = arrays.length >> 1; step > 0; step = step >> 1) {
        //从增量那组开始进行插入排序，直至完毕
        for (let i = step; i < arrays.length; i++) {
            let j = i;
            let temp = arrays[j];
            // j - step 就是代表与它同组隔壁的元素
            while (j - step >= 0 && arrays[j - step] > temp) {
                arrays[j] = arrays[j - step];
                j = j - step;
            }
            arrays[j] = temp;
        }
    }
    return arrays
}
```
4. 冒泡
```js
const boblueSort = (nums = [1,5,9,7,5,3,4,6,8,2]) => {
   let n = nums.length
   let complate = false 
   for(let i = 0; i < n; i++){
     complate = true 
     for(let j = 0; j < n - i - 1; j++){  
       if(nums[j] > nums[j + 1]){
          swap(j, j+1, nums)
          complate = false
       }
     }
     if(complate){
         break
     }
   }
   return nums
}
function swap(i, j, nums){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```
5. 归并排序，分而治之，是一种分治算法
- 配合递归思想非常的好写，省内存的写法相对复杂
```js
const mergeSort = (nums = [7, 5, 3, 1, 9, 8, 2, 4, 6, 10]) => {
  if (nums.length < 2) {
    return nums;
  }
  let mid = nums.length >> 1;
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
};

const merge = (left, right) => {
  let result = [];
  let i = 0, j = 0;
  while (left.length > i && right.length > j) {
    result.push(left[i] > right[j] ? right[j++] : left[i++]);
  }
  while (left.length > i) {
    result.push(left[i++]);
  }
  while (right.length > j) {
    result.push(right[j++]);
  }
  return result;
};
```
6. 快速排序
- 快排遇上递归，同样是非常的美
```js
// 基础写法
const quickSort = (nums = [1,5,9,7,5,3,4,6,8,2]) => {
   if(nums.length < 2){
       return nums
   }
   let point = nums[0]
   let left = []
   let right = []
   for(let i = nums.length - 1; i > 0; i--){
     let cur = nums[i]
     if(point < cur){
        right.push(cur) 
     }else{
        left.push(cur)   
     }
   }
   return quickSort(left).concat(point, quickSort(right))
}
// 也叫划分交换排序，配合递归
const quickSort = (nums = [1,5,9,7,5,3,4,6,8,2]) => {
   //交换两个数 
   const swap = (i, j, arr) => {
     let temp = arr[i]
     arr[i] = arr[j]
     arr[j] = temp
   }
   // 区间 [left, right]，把小的放一边，把大的放一边，返回中心点索引 
   const findCenter = (left, right, arr) => {
     const point = left   // 标杆元素
     let idx = left + 1   // 记录交换的索引
     for(let i = idx; i <= right; i++){
       if(arr[i] < arr[point]){
         swap(i, idx, arr)
         idx++
       }
     }
     // 不要忘了把标杆弄到最中间，小心 idx++ 越界  
     swap(point, idx - 1, arr)
     return idx - 1
   }
   // 递归，分而治之 
   const sort = (left, right, arr) => {
      if(left < right){
        const mid = findCenter(left, right, arr)
        sort(left, mid, arr)
        sort(mid + 1, right, arr)
      }
   }
   sort(0, nums.length - 1, nums)
   return nums
}
```
7. 堆排序
```js
// 假设当前的节点树为 n，i为数组的下标
// let parentNode = (i - 1) >> 1，>> 位运算不用向下取整
// let leftNode = 2 * i + 1
// let rightNode = 2 * i + 2
// 构建堆，堆化，这里用一种比较简洁的heapify
// heapify：把当前的节点当成一棵树，计算出左右子节点，如果根最大就是大根堆，如果根最小，就是小根堆
const heapify = (n, i, arr) => {
  // 递归出口
  if(i >= n){
    return
  }
  let max = i
  let left = i * 2 + 1
  let right = i * 2 + 2
  //比较左子树
  if(left < n && arr[left] > arr[max]){
    max = left
  }
  // 比较右子树
  if(right < n && arr[right] > arr[max]){
    max = right
  }
  // 说明最大值不是自己
  if(max != i){
    swap(i, max, arr)
    // 被调整过的子树需要继续调整
    heapify(n, max, arr)
  }
}
function swap(i, j, arr){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 这里扩展一下堆排序
// 整体思路：先构建一个大根堆，然后把堆顶和最后一个元素交换，交换了的节点继续 heapify 操作调整即可
const heapSort = (nums) => {
  let n = nums.length
  createMaxHeap(nums, n)
  for(let i = n - 1; i >= 0; i--){
    // 交换两个元素
    swap(0, i, arr)
    // 继续以交换了的做 heapify 调整为大顶堆
    heapify(i, 0, nums)
  }
  return nums
}

function createMaxHeap(nums, n){
  // 数组乱序的，我们就以第一个父节点，从下往上，从右往左做 heapify 即可
  for(let i = (n - 1) >> 1; i >= 0; i--){
    heapify(n, i, nums)
  }
}
// 构建堆的过程是O（n），堆排序是n*log n
```
### 副本排序法
- 需要额外的内存副本

2. BFS
```js
var isSymmetric = function(root) {
  //2.BFS，当层如果为空，设置一个#区别一下
  let queue = [root]
  while(queue.length){
     let curLen = queue.length
     let temp = []
     while(curLen > 0){
         curLen--
         let node = queue.shift() 
         if(node == null){
            temp.push('#')  
         }else{
            temp.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
         }
     }
     if(!vilidate(temp)){
         return false
     }
  }
  return true
};
// 验证是不是对称
function vilidate(temp){
     let i = 0, j = temp.length - 1
     while(i < j){
        if(temp[i] != temp[j]){
            return false
        }
        i++;
        j--;
     }
     return true
}
```
