/*
 * @Description: 代码审查
 * @Autor: hrt
 * @Date: 2019-11-07 09:25:19
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-08 09:30:34
 */

// 1.定义了未使用，增加维护难度，尽量用const, 要改动地址也要用let
const num = 5 // 
function example() {
  var a = 1;
  const b = 1;
  var c = a + b;
  var d = c + 2;
  return d
}
example()

// 2.自我感觉良好的命名。看上去命名挺规范，缩写，驼峰法都用上，ESlint通过，内心fName是啥？
const fName = 'huang'
const lName = 'ruitian'
// 推荐
const firstName = 'xxx'
const lastName = 'xxx'

// 3.太啰嗦了，不够简洁
let nameString; // name
let ageNumber; //age


// 4.什么值小于10？
// const MAX_INPUT_LENGTH = 10;
if (value.length < 10) {
  return value
}

// 5.冗余的获取值
function getFullName(user) {
  const name = user.name
  const age = user.age
  return name + "" + age
}
getFullName(user)

//推荐解构赋值，模板字符串
function getFullName({
  name,
  age
}) {
  return `${name}${age}`
}
getFullName(user)

// 6. empty什么，返回什么? 我怎么知道你要干嘛返回什么
// 推荐前面用动词is, can, has.....
function empty(arr) {
  if (arr.length) {
    return true
  }
  return false
}

// 7.功能函数建议动词开头get, set.....
function fullName() { // getFullName

}

// 8. 不该if else的地方，魔鬼if else....
function getDay(a) {
  if (a === 0) {
    return '星期天'
  } else if (a === 1) {
    return '星期一'
  } else if (a === 2) {
    return '星期二'
  } else if (a === 3) {
    return '星期三'
  } else if (a === 4) {
    return '星期四'
  } else if (a === 5) {
    return '星期五'
  } else {
    return 'every day'
  }
}

// 9.魔鬼三目喔？？？多条件判断的时候我？？？
function getDay(a) {
  return a === 0 ? '星期天' : (a === 1 ? '星期一' : (a === 2 ? '星期二' : (a === 3 ? '星期三' : (a === 4 ? '星期四' : (a === 5 ? '星期五' : '星期天')))))
}

//推荐方式，方便加减，同时简洁好维护
const arr = ['星期一', '星期一', null, '星期一', null, '星期一']

function getDay(a) {
  return arr[a]
}

// 10.老喜欢用原型
function Queue(contents = []) {
  this.queue = [...contents]
}
Queue.prototype.shift = function () {
  const val = this.queue[0]
  this.queue.splice(0, 1);
  return val
}

// 11.类实例没有多余的东西，constructor，super多余了
class AcModal extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      bankflag: '0',
      // .....省略state属性
    }
  }
}

// 推荐，简洁点了呀
class AcModal extends Component {
  //构造函数
  state = {
    bankflag: '0',
    // .....省略state属性
  }
}

// 12.工具函数
class AcModal extends Component {
  getDay(a) {
    return arr[a]
  }
  getDay1(a1) {
    return arr[a1]
  }
}

// 推荐箭头函数，避免头疼的this指向问题
class AcModal extends Component {
  getDay = (a) => {
    return arr[a]
  }
  getDay1 = (a1) => {
    return arr[a1]
  }
}

// 13.组件文件太长了吧
class AcModal extends Component {
  // 。。。。。。此处省略1600行，一行注释都没有
}
// 推荐分几个小组件好维护代码

// 15。工具函数尽量用lodash



// 未来一年内自己的计划和关注点。
// 1.扎实基础，能根据业务编写通用的组件
// 2.webpack编译时间太长了，是否可以增加一下打包速度？
// 3.编码书写更加规范，书写出维护性比较高的代码
// 4.项目越来越大，研究react API, 尽可能的帮助项目运行更顺畅提出意见
  
// 安利一个 vs code 插件，Error Lens, 避免引入过多没有使用的组件，变量等


