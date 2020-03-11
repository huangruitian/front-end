# 时间循环
- js运行的环境称之为宿主，现在js可以运行在浏览器端，也可以运行在服务端等等
- 其实，js 和 ES语言是有区别的，js是ES的超集。ES + web API = js
- node.js = ES + node API

# 执行栈
- call stack，是一个特别的数据结构，用于存放各种函数的执行环境。
1. 每个函数执行之前，它的相关信息会加入到执行栈中（预编译）
2. 函数调用之前，会创建执行环境，然后加入到执行栈中
3. 函数调用完之后，销毁执行栈
- JS引擎永远执行的都是执行栈的最顶部，只有一个执行栈（js单线程）
- 每一个script脚本都可以看成一个全局上下文，

# 异步函数
- 某些函数不会立即执行，需要等到某个时机到达后才会立即执行，这样的函数称之为异步函数
- 比如ajax，事件处理函数。异步函数的执行时机，会被宿主环境控制

# 浏览器宿主环境中包含五个线程
1. JS引擎：负责执行执行栈最顶部代码
2. GUI线程：负责渲染页面
3. 事件监听线程：负责监听各种事件
4. 计时线程：负责计时
5. 网络线程：负责网络通讯

# event lop
- event queue 事件队列
1. 当上面的线程发生了某些事情，比如点击事件，被事件监听线程监听着点击事件
2. 当用户点击了事件，就会把点击事件要执行的程序加入到 event queue
3. 当执行栈为空的时候，event queue 会出队，队首加入到执行栈执行。
- event queue、JS引擎、和其它线程配合就称之为事件循环队列
- 异步函数一定会放在 event queue 中！！！

# event lop 其实是有两个队列的
- 宏任务（队列）：macroTask，计时器结束的回调，事件回调、http回调等绝大部分异步函数会进入宏队列
- 微任务（队列）：MutationObserver，Promise产生的回调进入微队列
- 当执行栈为空的时候，JS引擎会首先检测微队列，先执行微队列的函数
- 微队列为空了，再检测宏队列，以此递归到两个队列都为空。
- script（宏）-> 同步代码 ->
- 微 -> 宏 -> 微 -> 宏 - 微 -> 宏

# 事件和回调函数的缺陷
- promise/async/await
- 生成器！！！
- 一般的回调函数有什么问题？回调地狱、代码嵌套多层难以理解。
- 异步函数之间的联系，Promise.race() 之类的

# 异步处理的通用模型

ES官方参考了大量的异步场景，总结出了一套异步的通用模型，该模型可以覆盖几乎所有的异步场景，甚至是同步场景。

值得注意的是，为了兼容旧系统，ES6 并不打算抛弃掉过去的做法，只是基于该模型推出一个全新的 API，使用该API，会让异步处理更加的简洁优雅。

理解该 API，最重要的，是理解它的异步模型

1. ES6 将某一件可能发生异步操作的事情，分为两个阶段：**unsettled** 和 **settled**

![](assets/2019-10-18-17-28-30.png)

- unsettled： 未决阶段，表示事情还在进行前期的处理，并没有发生通向结果的那件事
- settled：已决阶段，事情已经有了一个结果，不管这个结果是好是坏，整件事情无法逆转

事情总是从 未决阶段 逐步发展到 已决阶段的。并且，未决阶段拥有控制何时通向已决阶段的能力。

2. ES6将事情划分为三种状态： pending、resolved、rejected

- pending: 挂起，处于未决阶段，则表示这件事情还在挂起（最终的结果还没出来）
- resolved：已处理，已决阶段的一种状态，表示整件事情已经出现结果，并是一个可以按照正常逻辑进行下去的结果
- rejected：已拒绝，已决阶段的一种状态，表示整件事情已经出现结果，并是一个无法按照正常逻辑进行下去的结果，通常用于表示有一个错误

既然未决阶段有权力决定事情的走向，因此，未决阶段可以决定事情最终的状态！

我们将 把事情变为resolved状态的过程叫做：**resolve**，推向该状态时，可能会传递一些数据

我们将 把事情变为rejected状态的过程叫做：**reject**，推向该状态时，同样可能会传递一些数据，通常为错误信息

**始终记住，无论是阶段，还是状态，是不可逆的！**

![](assets/2019-10-18-18-10-18.png)

3. 当事情达到已决阶段后，通常需要进行后续处理，不同的已决状态，决定了不同的后续处理。

- resolved状态：这是一个正常的已决状态，后续处理表示为 thenable
- rejected状态：这是一个非正常的已决状态，后续处理表示为 catchable

后续处理可能有多个，因此会形成作业队列，这些后续处理会按照顺序，当状态到达后依次执行

![](assets/2019-10-18-18-10-38.png)

4. 整件事称之为Promise

![](assets/2019-10-18-18-15-52.png)

**理解上面的概念，对学习Promise至关重要！**

# Promise的基本使用

```js
const pro = new Promise((resolve, reject)=>{
    // 未决阶段的处理
    // 通过调用resolve函数将Promise推向已决阶段的resolved状态
    // 通过调用reject函数将Promise推向已决阶段的rejected状态
    // resolve和reject均可以传递最多一个参数，表示推向状态的数据
})

pro.then(data=>{
    //这是thenable函数，如果当前的Promise已经是resolved状态，该函数会立即执行
    //如果当前是未决阶段，则会加入到作业队列，等待到达resolved状态后执行
    //data为状态数据
}, err=>{
    //这是catchable函数，如果当前的Promise已经是rejected状态，该函数会立即执行
    //如果当前是未决阶段，则会加入到作业队列，等待到达rejected状态后执行
    //err为状态数据
})
```

**细节**
1. 未决阶段的处理函数是同步的，会立即执行
2. thenable和catchable函数是异步的，就算是立即执行，也会加入到事件队列中等待执行，并且，加入的队列是微队列
3. pro.then可以只添加thenable函数，pro.catch可以单独添加catchable函数
4. 在未决阶段的处理函数中，如果发生未捕获的错误，会将状态推向rejected，并会被catchable捕获
5. 一旦状态推向了已决阶段，无法再对状态做任何更改
6. **Promise并没有消除回调，只是让回调变得可控**

# Promise的串联
- 上面都是针对单个Promise的处理，是并列关系，不能获取上一个状态的信息，没有联系
- 场景：后端有三个表格，学生、教室、老师；要拿到小明所在班级的老师的姓名
1. 获取小明的班级id
2. 根据班级id获取小明所在班级老师的id
3. 根据老师的id来查询老师的信息
- 这个场景就是Promise的串联；

当后续的Promise需要用到之前的Promise的处理结果时，需要Promise的串联

Promise对象中，无论是then方法还是catch方法，它们都具有返回值，返回的是一个全新的Promise对象，它的状态满足下面的规则：

1. 如果当前的Promise是未决的，得到的新的Promise是挂起状态
2. 如果当前的Promise是已决的，会运行响应的后续处理函数，并将后续处理函数的结果（返回值）作为resolved状态数据，应用到新的Promise中；如果后续处理函数发生错误，则把返回值作为rejected状态数据，应用到新的Promise中。
3. 如果后续的处理出错了，出错信息的会传递到下个Promise 的 resolved 中
4. Promise并没有减少代码，而是让回调地狱消除，可控了

**后续的Promise一定会等到前面的Promise有了后续处理结果后，才会变成已决状态**

如果前面的Promise的后续处理，返回的是一个Promise，则返回的新的Promise状态和后续处理返回的Promise状态保持一致。

# Promise的其他api

## 原型成员 (实例成员)

- then：注册一个后续处理函数，当Promise为resolved状态时运行该函数
- catch：注册一个后续处理函数，当Promise为rejected状态时运行该函数
- finally：[ES2018]注册一个后续处理函数（无参），当Promise为已决时运行该函数

## 构造函数成员 （静态成员）

- resolve(数据)：该方法返回一个resolved状态的Promise，传递的数据作为状态数据
  - 特殊情况：如果传递的数据是Promise，则直接返回传递的Promise对象
  
- reject(数据)：该方法返回一个rejected状态的Promise，传递的数据作为状态数据

- all(iterable)：这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个并行的promise对象的状态集合。
- 注意: all必须全部完成，才会触发then，有一个失败，都会触发catch

- race(iterable)：当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象

# async 和 await

async 和 await 是 ES2016 新增两个关键字，它们借鉴了 ES2015 中生成器在实际开发中的应用，目的是简化 Promise api 的使用，并非是替代 Promise。

## async

目的是简化在函数的返回值中对Promise的创建

async 用于修饰函数（无论是函数字面量还是函数表达式），放置在函数最开始的位置，被修饰函数的返回结果一定是 Promise 对象。

```js

async function test(){
    console.log(1);
    return 2;
}

//等效于

function test(){
    return new Promise((resolve, reject)=>{
        console.log(1);
        resolve(2);
    })
}

```

## await

**await关键字必须出现在async函数中！！！！**

await用在某个表达式之前，如果表达式是一个Promise，则得到的是thenable中的状态数据。

```js

async function test1(){
    console.log(1);
    return 2;
}

async function test2(){
    const result = await test1();
    console.log(result);
}

test2();
```

等效于

```js

function test1(){
    return new Promise((resolve, reject)=>{
        console.log(1);
        resolve(2);
    })
}

function test2(){
    return new Promise((resolve, reject)=>{
        test1().then(data => {
            const result = data;
            console.log(result);
            resolve();
        })
    })
}

test2();

```

如果await的表达式不是Promise，则会将其使用Promise.resolve包装后按照规则运行
