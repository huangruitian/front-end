//js的this指向比较复杂，需要一两天来总结一下；
// 我们先来实现一下改变this指向的三个函数，call, apply, bind

Function.prototype.call2 = function (context) {
    var fn = 'fn'
    var _arg = [] //可以传参
    //this 参数可以传 null 或者 undefined，此时 this 指向 window
    context = context ? Object(context) : window;
    //保证不和原来的obj上的fn属性冲突
    while (context.hasOwnProperty(fn)) {
        fn += Math.random()
    }
    //巧妙的利用对象执行的方式来改变函数里的this指向
    context[fn] = this;
    //保证可以传参
    for (var i = 1, len = arguments.length; i < len; i++) {
        _arg.push('arguments[' + i + ']')
    }
    //巧妙的利用eval来执行函数传入参数，并保证有返回值
    var result = eval('context[fn](' + _arg + ')') //巧妙的利用对象执行的方法改变this模拟
    // 操作完删除掉
    delete context[fn];
    return result
}

// 测试用例
var value = 2;
var obj = {
    value: 1,
    // fn: 123
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null);
// 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// {value: 1, name: "kevin", age: 18}

console.log(obj);
// {value: 1, fn: 123}
// console.log('obj', obj);

Function.prototype.apply2 = function (context, arr) {
    context = context ? Object(context) : window;

    while (context.hasOwnProperty(fn)) {
        fn += Math.random()
    }
    context[fn] = this;

    var result;
    // 判断是否存在第二个参数
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context[fn](' + args + ')');
    }

    delete context[fn]
    return result;
}

// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，
// 提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
Function.prototype.bind2 = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    context = context ? Object(context) : window;
    var self = this
    var arg = [].slice.call(arguments, 1)
    var temp = function () { }
    function fnBind() {
        var _arg = [].slice.call(arguments, 0)
        //判断有没有进行new操作
        return self.apply(this instanceof fnBind ? this : context, arg.concat(_arg))
    }
    // 如果是new fnBind操作，其实就是在new this，让原来的函数当成构造器生成实例，
    // 这样就会有一个问题，访问不到原来构造器原型，即让fnBind.prototype 等于原来函数的原型 
    // 所有直接让new fnBind的实例原型等于原来的函数的原型即可。
    // 即：修改返回函数的 fnBind.prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值。
    // fnBind.prototype = self.prototype 
    // fnBind.prototype = self.prototype有一个缺点，直接修改 fnBind.prototype 的时候，
    // 也会直接修改绑定函数 fn.prototype 的原型，这样再bind其它对象的时候就会造成对象混用一个原型，混乱！
    //           fn.prototype   （原函数的原型被影响了，再bind别的对象就会混用此原型）
    //      fnBind.prototype  （实际上是修改构造器的原型）
    //  obj.prototype       （修改实例的原型）
    // 所以上圣杯继承
    temp.prototype = self.prototype 
    fnBind.prototype = new temp() 
    return fnBind
}


//穿插一个小知识点
var add1 = function (x) {
    var arg = [].slice.call(arguments)
    return function (y) {
        var _arg = [].slice.call(arguments)
        return arg.concat(_arg)
    }
}

// 我们知道打印函数时会自动调用 toString()方法，函数 add(a) 返回一个闭包 sum(b)，
// 函数 sum() 中累加计算 a = a + b，只需要重写sum.toString()方法返回变量 a 就OK了。
function add(a) {
    function sum(b) { // 使用闭包
        a = a + b; // 累加
        return sum;
    }
    sum.toString = function () { // 重写toString()方法
        return a;
    }
    return sum; // 返回一个函数,
}

// add(1) // 1
// add(1)(2)  // 3
// add(1)(2)(3) // 6
add(1)(2)(3)(4) // 10 

// Object.create = function (obj) {
//     function F() {}
//     F.prototype = obj;
//     return new F();
// };

// 模拟 new 操作 new fn()
function create(fn) {
    // 1、获得构造函数，同时删除 arguments 中第一个参数
    Con = [].shift.call(arguments);
    // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    var obj = Object.create(Con.prototype);
    // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
    // 4、优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
};