# umiJS
- 插件化
- 开箱即用
- 约定式路由
- https://umijs.org/zh-CN
- npm i -g umi //全局安装一下就可以umi dev 开发使用了

# umiJS 有强的约束力
- src/pages，其实也可以直接pages，习惯上还是建议写上src
- pages 强约定了放页面，pages/page1，pages/page2，这样命名的组建，路由就直接是这样了
- 首页的话就直接是 pages/index，强约束。
- umijs 里面还配置了很多内置的脚本，可以直接开发 umi dev 就可以开发了，什么都不用配置
- 包括一些热拔插，热启动的功能
- umi dev 编译出.umi 文件夹，可以让上面的pages/page1，pages/page2，直接打路由可以访问

# 打包 umi build
- 像 umi dev 一样爽

# 两种路由使用方法
- umijs有两种路由使用方法
1. 约定式路由：约定好的文件夹和文件，来代表页面，umi会根据开发者书写好的页面，生成路由配置；最终会变成配置式路由。
2. 配置式路由：直接书写路由配置文件

# 约定式路由
- umi约定，工程中的pages文件夹中存放的是页面。如果工程包含src目录，则src/pages是页面文件夹唉
- umi约定，页面的文件名字，和页面的路径，就是页面的路由
- 举例：pages/a -> 路由就是/a，pages/son/a -> 路由就是/son/a，非常简单，非常爽
- umi约定，如果的页面文件名字是index.js，pages/index.js ->  首页路由 /
- 子页面的首页也是 pages/son/index.js
- 注意避免文件名和当前目录文件夹名字一样。否则冲突无法匹配。
- umi约定，如果src/layouts目录存在，则该目录中的index.js表示全局通用的布局，布局中的props.children则表示添加具体的页面。切换别的路由都会有这个通用的布局。
- umi约定，如果pages文件夹中，包含_layout.js，则它所在目录以及其所有的子目录中的页面，公用该布局。
- 404约定，pages/404.js中，表示404页面，匹配不到路由跳到该页面；开发模式中无效

# 路由跳转
- umi/Link，使用和NavLink 完全一样，其实就是react-router-dom中的Link
- NavLink， 其实就是react-router-dom 中的 NavLink
- 跳转链接：导入 umi/Link、umi/NavLink
- 代码、组件中跳转，导入umi/router，它是个对象，就是history的一些方法
- @表示src目录

# 获取路由信息 
- 所有的页面、布局组件，都会通过属性props，收到下面的属性
1. match -> react-router的match
2. history -> react-router的match
3. match
4. location
5. route 路由对应的配置
- 如果要使用pathname之类的，请使用withRouter
- $id.js 文件名约定参数，会传到组件的props.match.params.id, 就react的动态路由/:id
- $id$.js 参数就可选了
- $name/$id$.js  -> /:name/:id

# 配置式路由
- 当使用配置式路由的时候，约定式路由会失效，有两种真实用方式
1. 项目根目录下的文件.umirc.js，他是umijs的配置，里面有个routes:[]
```js
export default {
  routes:[
    {   
        title:"首页"
        path:"/"
        component: "./index" //相对于pages路径配置的，pages/index
        exact:false
        routes:[
            //包子路由 {...}
            ".src/routes/Private.js", ".src/routes/b.js" //这种可以实现路由权限
        ]
    }
  ]
}
```
- 每个路由配置都可以添加任何属性

2. 项目根目录下的config/config.js
- 看官网

# 使用dva
- dva模型，作为一个umi的一个插件
- dva 是管理redux的插件
- 官方插件集 umi-piugin-react
- 使用umi插件在.umirc.js
- dva插件和umi整合后，将模型分为两种：
1. 全局模型：所有页面通用，工程一开始启动后，模型就会挂载到仓库
- 定义全局模型，约定在src/models 目录下，模型的命名空间和文件名一致
```js
    // dva 写法，组件connect 之后，dispatch({ type:"counter/delete" })
    export default {
        state:0,           // counter.js
        reducers:{
            delete(state){ // type:"counter/delete"
                return state - 1
            },
            add(state){
                return state + 1
            }
        }
        effects: {
            *update(action, sageEffects){
                // 这里是一些逻辑
                // 副作用处理用 sageEffects 指令
            }
        }
    }
```
2. 局部模型：只能被某些页面使用，访问具体的页面时才会挂载到仓库
- 定义局部模型，约定是pages文件夹下，在哪里定义，哪里的页面就会动态加载该模型
- 开发模式全都能看见的，局部模型有点像多组件的state的上提，但是，它是单链式的，能向上找
- 单model.js，

# 样式
1. 保证类样式名称的唯一性：css-module / BEM
- umi 使用了webpack，的css-loader加载器，内部包含了css-module
- css文件 -> css-module -> 对象，导入的时候直接用导入的对象的key
- import styles from "./a.css"
- 不共享样式通常放同一个目录即可
- 共享放assets/css文件夹中，尽量以button.css 这样子放会好点，维护性好

2. 样式代码的重复 less
- less 天生支持，less文件 -> less-loader -> css代码 -> css-loader(开启了module) -> 对象

# 代理和数据模拟
1. 代理
- 一般用于解决development模式的跨域
- .umirc.js 配置proxy

2. 数据模拟
- 解决前后端协同开发的问题，umi是一个企业级别的脚手架，什么都做好了，开箱即用
- mock模块，模拟数据，无需管后端

# umi 约定的mock
1. mock文件夹中的文件
2. src/pages文件夹中的_mock.js文件
- 以上两种js文件，均会被umijs读取，并作为数据模拟的配置
- 开发完把文件名字一改，就可以了。
- 甚至可以自行发挥，添加模拟数据，mockjs库
- 建议使用mockjs库，方便快捷; http://mockjs.com/

# dva 
- https://dvajs.com/guide/
- 写业务代码的时候action 和 reducers 模版代码太重了，dva就很好的把这两个东西激进的整合起来了。
- dva不仅仅是一个第三方库，更是一个框架。它主要整合了redux的相关内容，让我们方便处理数据
- dva 依赖 react、react-router、redux、redux-saga、react-redux、connected-react-router
- dva 把这些东西都整合起来，使用起来非常舒服
- https://dvajs.com/guide/concepts.html#数据流向

# 初始化dva
- model是dva的最核心的东西。
- dva 配置文件内容东西也很多，https://dvajs.com/api/#输出文件
```js
    import React from "react"
    import dva from "dva"
    const App = (props) => {
        return(
            <div>
                网站根App
            </div>)
    }
    // 得到一个dva对象
    const app = dva()

    // 启动之前定义一个模型，redux-saga/action/reducer 整合在一起
    // 必须在启动之前
    app.model({
        namespace:"student",   //不能缺省，仓库名。
        state:{                //默认值
        total:0,
        datas:[]
        },
        reducers:{             //reducer，dva会自动合并
        // dva 约定，方法的名字，就是具体action type
        // 组件使用dva下的connect链接，跟以前一样的用法    
        delete(state, action){
            //以前同步的逻辑
            return {...state}  //注意 immer 数据写法
        },
        },
        effects:{              //副作用，底层redux-saga，方法的名字就是触发的action
        /**
            * @param {*} action 
            * @param {*} sagaEffect redux-saga 对象
            *  {
            *     put({type:'delete'}) //重新触发自己的action，不用加前缀
            *     ...还有很多方法，查文档
            *  }
            */
        *asyncAdd(action, sagaEffect){
            // 这里推荐ES6 开发，阮老师的ES6
            // https://es6.ruanyifeng.com/#docs/generator
        }
        },
        /**
         * 每个对象是一个函数，订阅者。
         * 加入store的时候执行一次
         */
        subscriptions:{
        func1(obj){
            //处理一些订阅事件，因为它只运行一次，非常适合订阅一些事件
            //比如注册一些特别的事件
            //obj.dispatch({type:'delete'})  
        }
        }
    })

    // 设置启动后的根路由,
    app.router(() => <App/>)
    // 该函数传入一个选择器，相当于document.getElementById("root")
    app.start("#root")
``` 

# 组件使用dva
```js
    import React from "react"
    import { connect } from "dva"

    const Test = (props) => {
        return(
            <div>
                网站根App
            </div>)
    }
    const mapStateToProps = (state) => ({
        total:state.student.total
    });

    const mapDispatchToProps = (dispatch) => ({
        // 传入的props方法以on开头。注意加命名空间
        onDelete:() => dispatch({type:"student/delete", playload:1})
    })

    export default connect(mapStateToProps, mapDispatchToProps)(Test)
```

# Generator 函数的语法
-  https://es6.ruanyifeng.com/#docs/generator
- Generator 生成器
- 由构造函数 Generator 创建的对象，该对象即是一个迭代器，同时，又是一个可迭代对象
```js
  // 伪代码，Generator 是js引擎的用的，外部不能用
  // 注意不能箭头函数，箭头函数没有this 
  var g = new Generator()
  // 迭代器
  g.next()
  // 它也是一个可迭代对象
  // for of   
  var iterator = g[Symbol.iterator]; 
```
1. 生成器函数，该函数用于创建一个生成器
```js
   //function *func1
   function* create(){

   }
   //生成器函数create调用后，返回的一定是一个生成器，而函数体里面的代码不会执行
   //函数体的代码是生成器控制执行的    
   var g = create()    
```
2. 每当调用一次生成器的next方法，生成器的函数体会从上次的yield的位置（或开始位置）运行到下一个yield， yield只能在生成器函数里面使用。
3. yield 表达式返回的数据，会当做当前迭代的数据，提前return 会提前done:true
4. 生成器的返回值，是结束后的返回值，一旦结束后继续next()，
-  都是{ value:undefined, done:false }
```js
   function* create(){
     console.log("kaishi")
     yield;     //g.next() -> { value:undefined, done:false }
     yield 1;   //g.next() -> { value:1, done:false }
     return 2;  //g.next() -> { value:2, done:true }     
   }  
   var g = create()  
```
5. 生成器调用next的时候，可以传递参数，该参数会作为生成器函数体上一次yield表达式的值
- 注意 yield getPromise()；不管getPromise逻辑怎么样，返回的啥，yield得到的就是啥
```js
   function* create(){
     console.log("开始")  
     //将 1 作为这次的迭代结果，等待第二次next，result才是1 
     //每次会卡在yield等待你 next() 走
     //yield 受外面控制的，next() 才往下走，参数是yield的返回值
     let result = yield 1;          // 等待，我的返回值是上次next(b)中的b    
     console.log("yield 1", result) // yield 1, b
     result = yield 2;              // 等待，我的返回值是上次next(c)中的c 
     console.log("yield 2", result) // yield 2, c
     result = yield 3;              // 等待，我的返回值是上次next(d)中的d 
     console.log("yield 3", result) // yield 3, d
     //yield + 1 = 4 次就完成了，后面再next都是 { value:undefined, done:true } 
   }  
   var g = create() 
   g.next("a") // 第一次传参无任何意义 { value:1, done:false }
   g.next("b") // { value:2, done:false }
   g.next("c") // { value:3, done:false }
   g.next("d") // { value:undefined, done:true }
```

6. 如果生成器函数嵌套生成器函数，如果单单只是写执行，没有任何作用
```js
   function* g2(){}
   function* create(){
     console.log("开始")  
     let result = yield 1;          // 等待，我的返回值是上次next(b)中的b    
     console.log("yield 1", result) // yield 1, b
     result = yield 2;              // 等待，我的返回值是上次next(c)中的c 
     g2();                //没有任何反映，想下为什么？
     result = yield* g2() //这样才会进入这个生成器。result是g2的返回值  
     console.log("yield 2", result) // yield 2, c
     result = yield 3;              // 等待，我的返回值是上次next(d)中的d 
     console.log("yield 3", result) // yield 3, d
     //yield + 1 = 4 次就完成了，后面再next都是 { value:undefined, done:true } 
   }  
   var g = create() 
   g.next("a") 
   g.next("b") 
   g.next("c") 
   g.next("d") 
```

# redux-saga
- redux-saga 就是基于上面的生成器做的
- 纯净，强大，灵活
- https://redux-saga-in-chinese.js.org/
1. 最开始的时候会启动一个saga任务，其实就是生成器函数，因为外部可控，不用等到action
2. saga任务提供了很多任务指令，可以通过指令控制它的运行，说白了就是通过指令来控制redux流程
3. sage任务就是一个生成器函数
```js
function* task(){ console.log('启动了') }
const sagaMid = createSagaMiddleware()
// store 后面运行
sagaMid.run(task) //启动了生成器，生成器就受外面控制了
```
4. 一般会把生成器函数放在saga文件夹 
```js
    function* task(){ 
        console.log('启动了')
        yield 3; // yield 普通数字没什么意义，会立即调用，同步代码一样
        yield `saga effects`; //放的是saga指令，会特殊处理，控制整个流程
    }
```
5. saga effects
- 再次强调，saga中，yield 后面如果是个Promise，saga会等待完成把值返回到下次next
- 如果Promise reject 失败了，会 throw 出错误，要try catch 一下
- 指令前面必须使用yield，才会被saga控制
- 每个指令本质上就是一个函数，该函数调用后，会返回一个指令对象，saga 会接受指令特殊处理
- {value:'saga effects', done:false}，内部是这样处理的
- take指令：监听某个action，只监听一次。yield 得到的是完整的action对象，take(actionTypes.a)
- all：等待多个生成器，完成才会下一步 all([task1(), task1()])
- takeEvery：死循环 take指令；takeEvery(actionTypes.a, task1())
- delay: 阻塞action，指定毫秒数
- put：重新触发action，相当于一个dispatch；put(action())
- call：用于副作用函数调用，通常是异步的
- apply：和call作用完全一样
- select：用于得到当期仓库的数据
- cps: 用于传统的回调写法，node.js标准风格的异步回调
- 更多的指令还是得看文档
```js
    function* task(){ 
        console.log('启动了')
        yield 3; // yield 普通数字没什么意义，会立即调用，同步代码一样
        yield takeEvery(actionTypes.a, task()); //放的是saga指令，会特殊处理，控制整个流程
    }
```
# react hook
- 原理:
- hook只能使用在函数组件
- 一个函数组件可以有很多hook，包括useState的hook，这样非常有利于横切关注点。

# useState：
1. 运行函数组件时，调用useState（第一次运行）
2. 检查一个状态表格
-  状态表格无内容
-  使用默认值在表格创建一个状态
-  将状态加入数组（多个时候就加多个）
3. 重新渲染界面又调用一次
- 状态表格有内容（不需要重新创建了）
- 忽略默认值，直接得到状态
4. 表格附着在函数组件上的，所以不会共享状态（各有各的状态表格）
- 注意细节：
1. useState最好写在函数起始位置，方便维护
2. useState不能出现在判断条件if里面，这样对维护表格不利（react根本不让这么写）。
3. useState返回的第二项，引用不变，节省内存
4. 如果使用函数改变数据，若数据和之前的数据完全相等（使用Object.is），不会导致重新渲染。
5. 使用函数改变数据，传入的值不会和原来的合并，而是直接替换。（setState是混合的，可以局部修改）
6. 也不能直接修改数据，和之前类组件一样。
7. 如果要强制刷新组件
- 强制刷新组件，类组件用forceUpdate()
- useState直接set一个空对象就行了,因为它是覆盖
8. 和类组件一样，组件中改变状态可能是异步的（在dom事件中），多个状态会合并提高效率，此时，不能   信任之前的状态，应该使用回调函数的方式。

**如果某些状态之间没有必然的联系，应该切分为不同的状态，而不要合并成一个状态**
**因为代码耦合度越低，越好维护**

# Effect Hook：用于函数组件中处理副作用
- useEffect：接受一个参数，是函数
- 副作用：ajax，计时器，更改dom对象，以及其它会对外部产生影响的部分。类组件的时候，涉及服务端渲染，除了DidMount,DidUpdate,willUnMount以外其它都会渲染两次，尽管react反复强调只能在三个生命周期使用，但是很多开发者不遵守，直接出Effect Hook了。

**细节**
1. useEffect运行的时间点是页面真实dom渲染完成后。因此它是异步执行的，并且不会阻塞浏览器
2. 相当于类组件的生命钩子DidMount和DidUpdate，挂载完和更新完
3. 但是又有区别的，类组件的两个生命钩子更改了真实的dom，但是用户没有看到UI界面，同步的
4. useEffect中的副作用函数，更改了真实的dom，并且用户已经看到了UI更新，异步的。不会阻塞界面
5. 每个函数组件中可以多次使用，但是也不能放在判断或循环等代码块中，和useState一样，后面的hook基本一致
6. useEffect是有返回值的，返回的是一个清理函数，函数的运行时间点是每次运行副作用的函数之前，首次渲染组件不会运行。组件销毁时，一定会运行。
7. 重新渲染组件的时候，不想重新运行副作用函数，可以使用第二个参数，这个参数是数组，然后副作用函数就依赖这个数组，只有依赖的数据和上一次不一样时，才会运行执行第一个副作用函数参数。
8. 所以当传递了依赖数据之后，如果数据没有变化
   8.1 副作用函数仅在第一次渲染后运行
   8.2 清理函数仅在卸载组件后运行
9. 所以，就可以利用useEffect来实现之前类组件的挂载运行一次，卸载时运行一次。（特别是监听移除dom事件）
10. 如果依赖项使用的是空数组，清理函数就没有作用了，但是卸载还是会运行一次
11. 副作用函数中，如果使用了函数组件上下文的变量，由于闭包的影响，会导致副作用函数中变量不会实时变化。js的知识点。
12. 如果副作用函数在每次注册时，会覆盖之前的副作用函数，因此，尽量保持副作用函数稳定，否则控制起来会比较复杂。（把副作用函数抽出去写，动态改变）

# 自定义hook：将一些常用的、跨组件的hook功能，抽离出去形成一个函数，该函数就是自定义hook
- 例如1：很多组件都需要在第一次加载完成之后，获取所有XXX的数据。
- 放在以前类组件，只能在挂载完成DidMount请求数据，或者redux。
- 以前的一些做法：
1. render props 数据一样，界面不一样，其实就是传递一个render函数下去运行。
2. withComponent 高阶组件就是把相同的逻辑抽出来。
- 自定义hook细节：
1. 函数名必须以use开头
2. 调用自定义hook函数时，应该放到顶层
3. 自定义hook其实就是把hook抽成一个函数出去，多个hook就可以抽多个，横切关注点，用组合compose编程。

- render props 数据一样，界面不一样，其实就是传递一个render函数下去运行。withComponet 高阶组件就是把相同的逻辑抽出来。

# reducer hook
- 该函数接受两个参数，一个是state，和action，和redux那一套一样。调用store.dispatch分发action返回变化后的数据。
```js
// redux：action -> store.dispatch(action.type) -> reducer -> newState -> store
// 通用的reducer hook, 其实就是一个store
export default function useReducer(reducer, initState, initFunc) {
    // initFunc是一个对第二个参数进行计算的一个回调函数
    const [state, setState] = useState(initFunc ? initFunc(initState) : initState)
    // 相当与store.dispatch
    function dispatch(action){
        const newState = reducer(state, action)
        setState(newState)
    }
    return [state, dispatch]
}
// reducer hook 未来可能会结合redux使用
```

# Context hook
- 获取上下文数据，之前的React.createContext()消费者也要套一层。用这个hook就可以直接返回ctx的值

# callback hook
- 用于得到一个固定引用值的函数，通常用它来优化性能
- 该函数有两个参数：
1. 函数，useCallback会固定该函数的引用，只要依赖项没发生变化则会保持之前函数的地址
2. 依赖项，也是个数组
- 该函数返回值：引用相对固定的函数地址

# Memo hook
- 用于保持一些比较稳定的数据，通常用于性能优化，用法和callback一样，只是callback只能固话一个引用返回。Memo功能强大些，可以固化更多东西。
- 可以让一些稳定的，高开销的渲染数据避免掉没有必要的渲染。
- 比如说list数据不想受点击事件避免不了的重新渲染，就可以用Memo
- 为什么会出Memo callback这样的API，因为函数组件是普通函数，它总是被重新渲染，不像类组件那样有些生命钩子只渲染一次。

# Ref hook 一个参数：默认值，返回一个固定的对象。```{current：值}```

# imperativeHandle Hook
```js
useImperativeHandle(ref, () => {
  //如果不给依赖项，则每次运行函数组件都会调用该函数
  //如果使用了依赖项，则第一次调用后，则进行缓存，依赖项变化才重新运行
  <!-- ref.current = 1 -->
  return 1
}, [])
// 这个hook，主要是用来使用ref转发的
```

# LayoutEffect Hook
- useEffect 是在浏览器渲染之后运行的，如果用它操作真实的dom，渲染页面有时候会闪烁，卡屏
- 真实渲染之前做一些改动，useLayoutEffect: 完成dom改动，还没有呈现给用户。用法和useEffect一样。

**细节**
- 但是应该尽量的使用useEffect，因为它不会阻塞页面渲染，如果出现了问题，再考虑使用useLayoutEffect

# antd pro
- 整合了很多前端的技术
- 阿里的最佳实践，基于umi再次整合
- React/umi/dva/antd






