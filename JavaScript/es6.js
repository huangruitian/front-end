/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-03 14:39:50
 * @LastEditors: hrt
 * @LastEditTime: 2019-12-05 10:12:39
 */

// let const
// 1.不存在像var那样变量提升
// 2.存在暂时性死区，严格按照先定义后使用
// 3.不允许重复声明
// 4.识别块级作用域，不像ES5之前只有函数作用域和全局作用域
// tips: 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。
// if(1) let a = 1; 报错，因为没有加括号

// const 和 let一样，本质上就是不能修改原来那个地址而已。如果想达到完全不能访问，使用Object.freeze({});

// ES6声明变量的方法，ES5之前只有var和function，ES6增加了let、const、import、class等。

// 解构赋值，ES6 内部使用严格相等运算符（===），只有当一个数组成员严格等于undefined，默认值才会生效
// let [x = 1] = [undefined];
// x // 1
// let [x = 1] = [null];
// x // null

// 数组结构按照index索引，对象结构按照对应的key
// 字符串也可以解构！
// let {toString: s} = 123;
// s === Number.prototype.toString // true
// let {toString: s} = true;
// s === Boolean.prototype.toString // true

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
// 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
// undefined就会触发函数参数的默认值。

// 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。
// Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

// 获取键名
// for (let [key] of map) {
//   // ...
// }

// 获取键值
// for (let [,value] of map) {
//   // ...
// }

// 模板字符串 ``, 里面可以写任何的表达式，包括函数。
// 同时可以配合函数使用，例如:
// let a = 5;
// let b = 10;
// tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
// tag(['Hello ', ' world ', ''], 15, 50);

// 字符串的新增方法...

// 函数的扩展
// 1.支持参数默认值
// 2.函数内，同样第不允许重复声明一样的参数，除了var
// 3.使用了默认参数时，不能有同名参数
// 4.默认参数是惰性求值的，每次都会重新计算
// 5.参数严格等于undefined才会触发默认值，和解构赋值一样
// 6.ES5之前，函数名fn.length会返回参数的长度，设置了默认值会失真
// 7.一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
//   等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

// 应用，可以利用默认参数达到不传就报错的目的，这样子就可以了。num = get()

// rest 参数
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

// tips：缺省参数只能写在最后面，后面不能有多余的参数，否则报错。
// 函数的length属性，不包括 rest 参数。
// 例如：(function(...a) {}).length  // 0

// ES6开始， fn.name才被写入了标准，返回函数的名字

// 箭头函数
// 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （严格来讲是运行时的第一个非箭头函数的作用域，没有自己的this）
// 2.不可以当作构造器来new，会报错
// 3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// 4.不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
// 5.箭头函数没有自己的this, arguments, 不能new操作
// 6.另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。

// tips：要非常小心这种情况
// const cat = {
//   lives: 9,
//   jumps: () => {
//     this.lives--;
//   }
// }
// 上面代码中，cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时，
// 如果是普通函数，该方法内部的this指向cat；如果写成上面那样的箭头函数，
// 使得this指向全局对象，因此不会得到预期结果。这是因为对象不构成单独的作用域，
// 导致jumps箭头函数定义时的作用域就是全局作用域。

// 同时也要小心这种，需要动态的获取this, 但是下面的this指向window
// var button = document.getElementById('press');
// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });