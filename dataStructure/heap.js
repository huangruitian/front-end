/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-10-09 11:36:47
 * @LastEditors: hrt
 * @LastEditTime: 2019-10-09 18:52:09
 * // 堆，堆的底层实际上是一棵完全二叉树，可以用数组实现
 * // 完全二叉树的一些公式
 * // 1.第n层的节点数最多为2n个节点
 * // 2.n层二叉树最多有2^0+...+2^n=2n+1-1个节点
 * // 3.第一个非叶子节点：length/2
 * // 4.一个节点的孩子节点：2n、2n+1
 * // 5.一个节点的父亲节点：n/2
 * // 每个的节点元素值不小于其子节点 - 最大堆
 * // 每个的节点元素值不大于其子节点 - 最小堆
 */

// 堆在处理某些特殊场景时可以大大降低代码的时间复杂度，
// 例如在庞大的数据中找到最大的几个数或者最小的几个数，
// 可以借助堆来完成这个过程。

// 堆的基本结构：
// 堆，堆的底层实际上是一棵完全二叉树，可以用数组实现！！！

// 堆的构建
// 用数组来存储的好处就是方便计算节点的左右节点和父节点
// 已知节点i, 左子节点2*i+1，右2*i+2，父节点(i-1)/2
// 从最后一个父节点检测是不是最大值，以此类推
// 1.找最后一个父节点，验证是不是最大值，递归父节点
// 2.递归层数
// 3.构建完一次最大堆，最大值就是根节点了（交换根节点和最后一个）

// 如果一棵完全二叉树的节点的值都是乱序，我们就可以从倒数第二层开始往上对每个节点进行heapify，
// 数据，索引，有效长度
function heapify(array, index, length) {
  if (index >= length) {
    return
  }
  //假设index默认最大的
  let max = index
  let l = 2 * index + 1
  let r = 2 * index + 2
  //如果左孩子在有效的边界内，并且左孩子比最大值大
  if (l < length && array[l] > array[max]) {
    max = l //先交换索引
  }
  //右边比最大值大交换
  if (r < length && array[r] > array[max]) {
    max = r //先交换索引
  }
  //不是默认的最大值，交换
  if (max != index) {
    [array[max], array[index]] = [array[index], array[max]]
    //交换之后，会破坏原来的子结构，递归
    heapify(array, max, length) //max节点继续heapify
  }
}

function createHeap(arr, type = 'max') { //默认大根堆
  this.data = arr
  this.type = type
  let lastNode = arr.length - 1
  let parent = Math.floor((lastNode - 1) / 2)
  for (let i = parent; i >= 0; i--) {
    heapify(arr, i, arr.length)
  }
}

var heap = new createHeap([6, 8, 4, 2, 3, 1, 5, 9, 7])
console.log(heap.data)

//一次heapify下沉操作（非递归）
function ajustMaxHeap(array, index, length) {
  //遍历所有的父亲节点，保证 i < length;就可以了 2*index + 1 是左孩子，i = 2 * i + 1 是左孩子的左孩子
  for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
    //如果右孩子存在，并且比左孩子大，那最大就是右孩子
    if (i + 1 < length && array[i + 1] > array[i]) {
      i++;
    }
    //如果父节点大于等于现在的最大值
    if (array[index] >= [array[i]]) {
      break; //没有交换没有影响，提前剪枝
    } else {
      [array[index], array[i]] = [array[i], array[index]];
      index = i; //最大值默认是index, 因为交换了，会影响上一颗树，所有换i, 继续遍历已i为根节点的左右子树
    }
  }
}

function createMaxHeap(arr, length) {
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) { //最后一个父节点开始
    ajustMaxHeap(arr, i, length);
  }
  return arr;
}

//小根堆
function ajustMinHeap(arr, index, length) {
  //遍历所有的父亲节点，保证 i < length;就可以了 2*index + 1 是左孩子，i = 2 * i + 1 是左孩子的左孩子
  for (let i = index * 2 + 1; i < length; i = i * 2 + 1) { //一直找左孩子
    if (i + 1 < length && arr[i + 1] < arr[i]) { //右孩子有效且比左孩子小
      i++
    }
    if (arr[index] < arr[i]) { //默认的最小值, 还是最小值，可以提前剪枝了
      break;
    } else { //否则交换两个的值，切记更新最小值的索引
      [arr[index], arr[i]] = [arr[i], arr[index]]
      index = i
    }
  }
}

function createMinHeap(arr, length) {
  //最后一个父节点开始
  for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
    ajustMinHeap(arr, i, length);
  }
  return arr;
}
console.log(createMinHeap([6, 8, 4, 2, 3, 1, 5, 9, 7], 9))

// 由于堆属于优先队列，只能从末尾添加
// 添加后有可能破坏堆的结构，需要从下到上进行调整
// 如果元素小于父元素，上浮
function minHeapAdd(element, array = [1, 2, 4, 7, 3, 6, 5, 9, 8]) {
  array.push(element);
  if (array.length > 1) { //堆大于2才上浮
    let lastNode = array.length - 1; //最后一个节点
    let parent = Math.floor((lastNode - 1) / 2); //最后一个节点的父节点
    while (parent >= 0) {
      // array[target]);
      if (array[lastNode] < array[parent]) { //新插入的节点小于父节点，要交换上浮
        [array[lastNode], array[parent]] = [array[parent], array[lastNode]]
        lastNode = parent; //父节点要变成最后一个节点继续求父节点
        parent = Math.floor((lastNode - 1) / 2); // 继续求父节点
      } else {
        break; //提前剪枝
      }
    }
  }
  return array;
}
console.log(minHeapAdd(0))

// 由于堆属于优先队列，只能从头部移除
// 移除头部后，使用末尾元素填充头部，开始头部下沉操作
function minHeapPop(array = [0, 1, 4, 7, 2, 6, 5, 9, 8, 3]) {
  let result = null
  if (array.length > 1) {
    result = array[0]
    array[0] = array.pop()
    createMinHeap(array, array.length)
  } else if (array.length == 1) {
    return array.pop()
  }
  console.log('array', array)
  return result
}
console.log(minHeapPop())

//堆排序
// 创建一个大顶堆，大顶堆的堆顶一定是最大的元素。
// 交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。
// 从后往前以此和第一个元素交换并重新构建，排序完成。
function heapSort(array) {
  let ajustMaxHeap = function (array, i, len) {
    for (let j = i * 2 + 1; j < len; i = i * 2 + 1) { //受影响的子节点继续下沉
      if (j + 1 < len && array[j + 1] > array[j]) { //右节点有效且比左节点大
        j++
      }
      if (array[j] > array[i]) { //最大值小于等于要比较的，剪枝
        [array[j], array[i]] = [array[i], array[j]]
        i = j
      } else {
        break;
      }
    }
  }
  //首先创建一个大顶堆
  let len = array.length
  let parent = Math.floor((len - 1) / 2)
  //第一个父节点开始沉, 沉到根节点(这一步只要是怕数据是乱序的)
  for (let i = parent; i >= 0; i--) {
    ajustMaxHeap(array, i, len)
  }
  // 交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。
  // 从后往前以此和第一个元素交换并重新构建，排序完成。
  for (let i = array.length - 1; i > 0; i--) { // n
    [array[0], array[i]] = [array[i], array[0]] //交换两个元素
    ajustMaxHeap(array, 0, i) //log n
  }
  console.log('----', array)
  return array
}

heapSort([6, 8, 4, 2, 3, 1, 5, 9, 7])

