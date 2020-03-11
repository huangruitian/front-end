/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-13 11:39:27
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-17 18:39:12
 */

/**
 * 1.JS的内置类型
 * 基本类型：null, undefined, number, string, boolean, symbol(ES6), bigint(最新提出的)
 * 其中 JS 的数字类型是浮点类型的，没有整型。并且浮点类型基于 IEEE 754标准实现，
 * 在使用中会遇到某些 Bug。NaN 也属于 number 类型，并且 NaN 不等于自身。
 * 
 * tips:undefined 不是保留字，低版本的浏览器可以使用
 * 
 * 对于基本的数据类型，如果使用字面量的方式，只有在有必要的时候才会转换成对象类型，
 * 就是常见的包装类：let a = 111; a.toString()
 * 
 * 引用类型：引用类型只要注意深浅拷贝的问题就行了
 */

/**
 * 2.typeof
 * 使用于对基础类型的判断，对于引用类型，除了函数以外都返回object
 * typeof null 也是 object，这是一个BUG，历史遗留问题
 * typeof返回类型：undefined, number, string, boolean, function, object, symbol(ES6), bigint(新提出)
 * 如果要准确的判断类型，可以通过 Object.prototype.toString.call(xx)。
 * 这样我们就可以获得类似 [object Type] 的字符串。
 */

/**
 * 3.类型转换
 *  3.1 转换成Boolean
 *  在条件判断的时候，除了在条件判断时，
 *  除了 undefined， null， false， NaN， ''， 0， -0，
 *  其他所有值都转为 true，包括所有对象
 * 
 *  3.2 对象转基本类型
 *  对象在转换基本类型时，首先会调用 valueOf 然后调用 toString。
 *  并且这两个方法你是可以重写的。
 *  当然你也可以重写 Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。
 */

// let a = {
//   valueOf() {
//     return 0;
//   },
//   toString() {
//     return '1';
//   },
//   [Symbol.toPrimitive]() {
//     return 2;
//   }
// }
// 1 + a // => 3
// '1' + a // => '12'
// 2 === a (注意这里是false, 不进行转换)

/**
 * 4.四则运算
 * 只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。
 * 其他运算只要其中一方是数字，那么另一方就转为数字。
 * 并且加法运算会触发三种类型转换：1.将值转换为原始值，2.转换为数字，3.转换为字符串。
 */

//   1 + '1' // '11'
// 2 * '2' // 4
// [1, 2] + [2, 1] // '1,22,1' （上面的123，转换第二步的时候，得到NaN会继续走）
// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'

/**
 * 5.== 运算符（步骤比较复杂，参考书籍）
 */

// 参考这道题目 [] == ![] // -> true
// [] 转成 true，然后取反变成 false
// [] == false
// 根据第 8 条得出
// [] == ToNumber(false)
// [] == 0
// 根据第 10 条得出
// ToPrimitive([]) == 0
// [].toString() -> ''
// '' == 0
// 根据第 6 条得出
// 0 == 0 // -> true

/**
 * 6.原型
 *  6.1 每个自定义的函数或内置构造器(例如Object、Number), 都有一个prototype属性，
 *      像内置的工具函数没有（bind, call, apply）
 *  6.2 所有函数的__proto__ === Function.prototype
 *  6.3 Symbol 作为构造函数来说并不完整，因为不支持语法 new Symbol()，
 *      但其原型上拥有 constructor 属性，即 Symbol.prototype.constructor。
 *  6.4 引用类型 constructor 属性值是可以修改的，但是对于基本类型来说是只读的，
 *      当然 null 和 undefined 没有 constructor 属性。
 *  6.5 __proto__ 是每个实例上都有的属性，prototype 是构造函数的属性，在实例上并不存在，
 *      所以这两个并不一样，但 p.__proto__ 和 Parent.prototype 指向同一个对象。
 *  6.6 __proto__ 属性在 ES6 时被标准化，但因为性能问题并不推荐使用，推荐使用 Object.getPrototypeOf()。
 *  6.7 每个对象拥有一个原型对象，通过 __proto__ 指针指向上一个原型 ，并从中继承方法和属性，
 *      同时原型对象也可能拥有原型，这样一层一层，最终指向 null，这就是原型链。
 *  tips：js是动态继承的语言
 */

/**
 * 7.原型链
 * 1.一个对象访问一个方法，如果没有，会根据__proto__往上找，直至找到或者到达null为止
 * 2.prototype 和 __proto__ 上篇文章介绍了 prototype 和 __proto__ 的区别，
 *   其中原型对象 prototype 是构造函数的属性，__proto__ 是每个实例上都有的属性，
 *   这两个并不一样，但 foo.__proto__ 和 Foo.prototype 指向同一个对象。
 * 3.prototype 和 __proto__
 *   上篇文章介绍了 prototype 和 __proto__ 的区别，其中原型对象 prototype 是构造函数的属性，
 *   __proto__ 是每个实例上都有的属性，这两个并不一样，但 foo.__proto__ 和 Foo.prototype 指向同一个对象。
 *   所以原型链的构建依赖于__proto__的，prototype只是构造器的一个属性
 * tips：可以这么理解 Foo，我是一个 constructor，我也是一个 function，我身上有着 prototype 的 reference，
 *       只要随时调用 foo = new Foo()，我就会将 foo.__proto__ 指向到我的 prototype 对象。
 */

/**
 * 8.instanceof 
 * 原理 instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
 * 其实就是 L instanceof R，在L的原型链上找有没有R的原型
 */
function MyInstanceof(L, R) {
  let origin = R.prototype
  let target = L.__proto__
  while (true) {
    if (!target) return false;
    if (target === origin) return true;
    target = Object.getPrototypeOf(target)
  }
}

/**
 * instanceof 能判断基本数据类型嘛？
 */
class PrimitiveNumber {
  static[Symbol.hasInstance](x) {
    return typeof x === 'number'
  }
}
console.log(111 instanceof PrimitiveNumber) // true

// tips：Symbol.iterator in XX  只要变量实现了Symbol.iterator接口就可以遍历

/**
 * 函数中的高阶函数
 * 高阶函数的用处很大。比如redux源码中的compose函数组合
 */
let arr = [1, 2, 3, 4, 5]

/**
 * arr.map
 * @param {function} 回调函数 function(item, index, arr){ return item }
 * @param {any} 回调函数的this, 可以忽略
 * @return {Array} 返回一个映射回调函数的数组，没有副作用
 */

/**
 * arr.reduce
 * @param {function} 回调函数 function(pre, cur, arr){ return (pre + cur) }
 * @param {any} initValue 初始值, 可选
 * @return {any} initValue 没传就会返回回调函数的第一个参数pre
 */

/**
 * arr.filter
 * @param {function} 回调函数 function(item){ return item % 2 === 0 }
 * @return {Array} 返回一个新数组，没有副作用。但是返回新数组的项，会根据回调函数的返回的布尔值决定
 */

/**
 * arr.sort
 * @param {function} 回调函数 function(a, b){ return a - b }
 * @return {Array} 返回原来的数组，有副作用。但是返回新数组的项，会根据回调函数的返回值大小决定
 */

/**
 * 函数的arguments为什么不是数组？如何转化成数组？
 * 因为argument是一个对象，只不过它的属性从0开始排，依次为0，1，2...最后还有callee和length属性。
 * 我们把这样的对象称为类数组，长得像数组的对象。
 * 常见的类数组有：用getElementByTagName/ClassName/Name（）获得的HTMLCollection，即dom元素
 */

// 类数组转数组
// 1.Array.prototype.slice.call(arguments)
// 2.Array.from() ES6扩展的方法，只要实现了Iterator接口的数据都可以转换成对象
// 3.ES6展开运算符 [...arguments]
// 4.利用concat+apply, Array.prototype.concat.apply([], arguments);

/**
 * forEach
 * 不能中断，只能使用try监视代码块，在需要中断的地方抛出异常。
 * 官方推荐方法（替换方法）：用every和some替代forEach函数。
 * every 在碰到 return false 的时候，中止循环。每一个都为真嘛？
 * some在碰到return ture的时候，中止循环。有一个都为真嘛？
 */

//js 数组扁平化 
let ary = [1, [2, [3, [4, 5]]], 6]; // -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary);
// 1.ary = str.replace(/(\[|\])/g, '').split(',')
// 2.ary = arr.flat(Infinity); ES6的
// 3.reduce + concat
function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

//4.扩展运算符，只要有一个元素有数组，那么循环继续
while (ary.some(d => Array.isArray(d))) {
  ary = [].concat(...ary);
}

//原型链编程，改变原数组
Array.prototype.flat1 = function (n = 1) {
  let result = [] //用栈
  if (n === Infinity) {
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        this.splice(i, 1, ...this[i])
        i--; //防止第一个还是数组
      }
    }
  } else {
    while (n > 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        if (Array.isArray(this[i])) {
          this.splice(i, 1, ...this[i])
        }
      }
      n--
    }
  }
  result = this
  return result;
}

Array.prototype.map = function (callback, that) {
  //处理数组异常，call，apply这样的改变this指向的
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property 'map' of null or undefined")
  }
  //处理回调函数异常
  if (Object.prototype.toString.call(callback) != "[object Function]") {
    throw new TypeError(callback + ' is not a function')
  }
  // 草案中提到要先转换为对象
  let O = Object(this); // Object([1]) 还是一个数组
  let T = that;
  //45.5 -> 45，取整，小于0的都会等于0
  let len = O.length >>> 0 //其实这里可以包括自定义原型的属性，所有才有下面的用in
  let A = new Array(len)
  for (let k = 0; k < len; k++) {
    // 还记得原型链那一节提到的 in 吗？in 表示在原型链查找
    // 如果用 hasOwnProperty 是有问题的，它只能找私有属性
    if (k in O) {
      let kValue = O[k];
      // 依次传入this, 当前项，当前索引，整个数组
      let mappedValue = callback.call(T, kValue, k, O);
      A[k] = mappedValue;
    }
  }
  return A;
}

/**
 * new 操作符号
 * 1.创建一个新对象
 * 2.连接到原型
 * 3.返回这个对象
 */
function create(Con, ...arg) {
  // !Con.prototype 防止是箭头函数
  if (typeof Con !== 'function' || !Con.prototype) {
    throw new TypeError('Con must be an function')
  }
  // 创建一个平面对象
  let obj = new Object()
  // 链接原型
  obj.__proto__ = Object.create(Con.prototype)
  // 运行构造函数初始化this.xx = xx
  let result = Con.apply(obj, arg)
  // 还要看看返回的结果是啥
  let isObject = typeof result === 'object' && result !== null
  let isFunction = typeof result === 'function'
  // 如果返回的是基本类型就返回一个this
  return (isObject || isFunction) ? result : obj
}

// 可以简化成这样写
function create() {
  // 1、获得构造函数，同时删除 arguments 中第一个参数
  Con = [].shift.call(arguments);
  // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
  var obj = Object.create(Con.prototype);
  // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments);
  // 4、优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
};

/**
 * 首先来实现call，改变this指向
 */

Function.prototype.call = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  // 利用context.fn 改变原来的this指向，秒
  var result = eval('context.fn(' + args + ')');
  // 用了再删除
  delete context.fn
  return result;
}

// ES6的写法
Function.prototype.call = function (context, ...args) {
  var context = context || window;
  context.fn = this;
  // 利用context.fn 改变原来的this指向，秒
  var result = eval('context.fn(...args)');
  // 用了再删除
  delete context.fn
  return result;
}

/**
 * 对应的apply实现，也是一样的
 */

Function.prototype.apply = function (context, args) {
  var context = context || window;
  context.fn = this;
  // 利用context.fn 改变原来的this指向，秒
  var result = eval('context.fn(...args)');
  // 用了再删除
  delete context.fn
  return result;
}

/**
 * bind怎么用？有什么效果？
 *         bind() 方法创建一个新的函数，在 bind() 被调用时，
 *     这个新函数的 this 被指定为 bind() 的第一个参数，
 *     而其余参数将作为新函数的参数，供调用时使用。
 * 如何模拟实现一个 bind 的效果？
 * 1.对于普通函数，绑定this指向
 * 2.对于构造函数，要保证原函数的原型对象上的属性不能丢失, 就是说bind返回的函数，可以new
 */

// 第五版
Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  // bind会返回一个函数
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 如果是new fBound 的方式，this指向自己，bind context 失效
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // new fBound 的时候原型属性不能丢失
  fBound.prototype = Object.create(this.prototype)
  return fBound;
}

/**
 * 深度克隆
 */

const getType = obj => Object.prototype.toString.call(obj);

const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
};
const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
  const {
    source,
    flags
  } = target;
  return new target.constructor(source, flags);
}

const handleFunc = (func) => {
  // 箭头函数直接返回自身
  if (!func.prototype) return func;
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if (!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor;
  switch (tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target));
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case symbolTag:
      return new Object(Symbol.prototype.valueOf.call(target));
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
}

const deepClone = (target, map = new Map()) => {
  if (!isObject(target))
    return target;
  let type = getType(target);
  let cloneTarget;
  if (!canTraverse[type]) {
    // 处理不能遍历的对象
    return handleNotTraverse(target, type);
  } else {
    // 这波操作相当关键，可以保证对象的原型不丢失！
    let ctor = target.constructor;
    cloneTarget = new ctor();
  }

  if (map.get(target))
    return target;
  map.set(target, true);

  if (type === mapTag) {
    //处理Map
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(item, map));
    })
  }

  if (type === setTag) {
    //处理Set
    target.forEach(item => {
      cloneTarget.add(deepClone(item, map));
    })
  }

  // 处理数组和对象
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop], map);
    }
  }
  return cloneTarget;
}