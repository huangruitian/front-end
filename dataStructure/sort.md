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
const mergeSort = (nums = [1,5,9,7,5,3,4,6,8,2]) => {
   if(nums.length < 2){
       return nums
   }
   let mid = nums.length >> 1
   return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}
const merge = (left, right) => {
  let temp = []
  while(left.length && right.length){
     temp.push(left[0] > right[0] ? right.shift() : left.shift())
  }
  return temp.concat(left.length ? left : right)
}
```
6. 快速排序
- 快排遇上递归，同样是非常的美
```js
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
```
### 副本排序法
- 需要额外的内存副本