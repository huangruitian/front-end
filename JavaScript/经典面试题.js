/*
 * @Description: 经典的JS面试题
 * @Autor: hrt
 * @Date: 2019-12-16 10:23:37
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-16 10:23:51
 */
function Foo() {
  getName = function () {
    console.log(1);
  } //会覆盖全局的 var getName
  return this;
}
Foo.getName = function () {
  console.log(2);
}
Foo.prototype.getName = function () {
  console.log(3);
}
var getName = function () {
  console.log(4);
}

function getName() {
  console.log(5);
}

Foo.getName() //2
getName() //4
Foo().getName() //1
getName() //1
new Foo.getName(); //2
new Foo().getName(); //3   new Foo() --> this.getName();
new new Foo().getName(); //3   new ( new Foo().getName() )


/**
* 考察的是事件循环和回调队列。注意以下几点：
* Promise 优先于 setTimeout 宏任务，所以 setTimeout 回调会最后执行
* Promise 一旦被定义就会立即执行
* Promise 的 resolve 和 reject  是异步执行的回调。所以 resolve() 会被放到回调队列中，在主函数执行完和 setTimeout 之前调用
* await 执行完后，会让出线程。async 标记的函数会返回一个 Promise 对象
*/
// 这里要注意node 11 以上和浏览器环境的 event lop 是一样的
async function async1() {
  console.log('async1 start')    // 2. async1 start
  await async2()
  console.log('async1 end')      // 6. async1 end
} 
async function async2() {
  console.log('async2')          // 3. async2
}
console.log('script start')      // 1. script start
setTimeout(function () {
  console.log('setTimeout')      // 8. setTimeout
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1')        // 4. promise1
  resolve()
}).then(function () {
  console.log('promise2')        // 7. promise2
})
console.log('script end')        // 5. script end
/**
 * 事件循环从宏任务（macrostack）队列开始，这个时候，宏任务队列中，只有一个 script (整体代码)任务。从宏任务队列中取出一个任务来执行。
 * 首先执行 console.log('script start')，输出 script start
 * 遇到 setTimeout 把 console.log('setTimeout') 放到 macrotask 队列中
 * 执行 aync1() 输出 'async1 start' 和 'async2' ,把 console.log('async1 end') 放到 micro 队列中
 * 执行到 promise ，输出 'promise1' ，把 console.log('promise2') 放到  micro 队列中
 * 执行 console.log('script end')，输出 'script end'
 * macrotask 执行完成会执行 microtask ，把 microtask quene 里面的 microtask 全部拿出来一次性执行完，所以会输出 'async1 end' 和 'promise2'
 * 开始新一轮的事件循环，去除执行一个 macrotask 执行，所以会输出 'setTimeout'
 */

function async1() {
  return new Promise((resolve) => {
     console.log('async1 start') 
     return async2(resolve)
  }).then(_ => {
     console.log('async1 end', _) 
  })
} 

function async2(preResolve) {
  return new Promise(_ => {
    console.log('async2')
    preResolve("async2 result")
  })
}

console.log('script start')      
setTimeout(function () {
  console.log('setTimeout')      
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1')        
  resolve()
}).then(function () {
  console.log('promise2')        
})
console.log('script end')        








