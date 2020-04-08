# 原理
- 组件节点App -> React Element -> function App
- hook只能使用在函数组件
- 一个函数组件可以有很多hook，包括useState的hook，这样非常有利于横切关注点。

# useState
- useState 运行过程 
1. 运行函数组件时，调用useState（第一次运行）
2. 检查一个状态表格
- 状态表格无内容
- 使用默认值在表格创建一个状态
- 将状态加入数组（多个时候就加多个）
3. 重新渲染界面又调用一次
- 状态表格有内容（不需要重新创建了）
- 忽略默认值，直接得到状态
4. 表格附着在函数组件上的，所以不会共享状态（各有各的状态表格）

# 注意细节
```js
  const [n, setN] = useState(0)
```
1. useState 最好写在函数起始位置，方便维护
2. useState 不能出现在判断条件if里面，这样对维护表格不利（react根本不让这么写）
3. useState返回的第二项，引用不变，节省内存
4. 如果使用函数```setN(0)```改变数据，若数据和之前的数据完全相等（使用Object.is），不会导致重新渲染。
5. 使用函数改变数据，传入的值不会和原来的合并，而是直接替换。（setState是混合的，可以局部修改）
6. 也不能直接修改数据，和之前类组件一样。
7. 如果要强制刷新组件
- 强制刷新组件，类组件用forceUpdate()
- useState直接set一个空对象就行了, 因为它是覆盖```const [n, forceUpdate] = useState(0)```
8. 和类组件一样，组件中改变状态可能是异步的（在dom事件中），多个状态会合并提高效率，此时，不能信任之前的状态，应该使用回调函数的方式。

**如果某些状态之间没有必然的联系，应该切分为不同的状态，而不要合并成一个状态**
**因为代码耦合度越低，越好维护**

# Effect Hook：用于函数组件中处理副作用
- 副作用：ajax，计时器，更改dom对象，以及其它会对外部产生影响的部分。
- 类组件的时候，涉及服务端渲染，除了DidMount, DidUpdate, willUnMount以外其它都会渲染两次，
- 尽管react反复强调只能在三个生命周期使用，但是很多开发者不遵守，直接出Effect Hook了。
- useEffect：接受一个参数，是函数
```js
  useEffect(() => {
    // do something
    // 比如增加一个计时器
    return () => {

    }
  }, []);
```
**细节**
1. useEffect 运行的时间点是页面真实dom渲染完成后。因此它是异步执行的，并且不会阻塞浏览器
2. 相当于类组件的生命钩子 DidMount 和 DidUpdate，挂载完和更新完
3. 但是又有区别的，类组件的两个生命钩子更改了真实的dom，但是用户没有看到UI界面，是[同步的]
4. useEffect 中的副作用函数，是更改了真实的dom，并且用户已经看到了UI更新，[异步的]。不会阻塞界面
5. 每个函数组件中可以多次使用，但是也不能放在判断或循环等代码块中，和useState一样，后面的hook基本一致（一般不要用这么奇葩的写法）
6. useEffect 是有返回值的，返回的是一个清理函数，函数的运行时间点是每次运行副作用的函数之前；首次渲染组件不会运行。组件销毁时，一定会运行。
7. 重新渲染组件的时候，不想重新运行副作用函数，可以使用第二个参数，这个参数是数组，然后副作用函数就依赖这个数组，只有依赖的数据和上一次不一样时，才会运行执行第一个副作用函数参数。
```js
  const [n, setN] = useState(0);
  useEffect(() => {
    // do something...
    // 比如增加一个计时器
    let t = setInterval(() => {
      setN(n + 1)
    }, 1000)
    // 这里是个坑，不返回清理函数爆栈
    // 怎么节省 t 的内存呢？
    return () => {
      console.log("清理了t：", t)
      clearInterval(t)
    }
  //这里要注意依赖项变了，函数才会二次运行； 
  }, [n]);

  // 上面的做法是不对的，正确的姿势应该如此
  useEffect(() => {
    let t = setInterval(() => {
      // 像 setState 一样用回调函数拿到准确的值
      setN(n => n + 1)
    }, 1000)
    return () => {
      console.log("清理了t：", t)
      clearInterval(t)
    }
  //这里要注意依赖项变了，函数才会二次运行； 
  }, []);
```
8. 所以当传递了依赖数据之后，如果数据没有变化
- 副作用函数仅在第一次渲染后运行
- 清理函数仅在卸载组件后运行
9. 所以，就可以利用 useEffect 来实现之前类组件的挂载运行一次，卸载时运行一次。（特别是监听移除dom事件）
10. 如果依赖项使用的是空数组，清理函数就没有作用了，但是卸载还是会运行一次
11. 副作用函数中，如果使用了函数组件上下文的变量，由于闭包的影响，会导致副作用函数中变量不会实时变化。js的知识点。
12. 如果副作用函数在每次注册时，会覆盖之前的副作用函数，因此，尽量保持副作用函数稳定，否则控制起来会比较复杂。（把副作用函数抽出去写，动态改变）
13. effects会在每次渲染后运行，并且概念上它是组件输出的一部分，可以“看到”属于某次特定渲染的props和state。也就是说 effects 会有自己的state 和 props
```js
  // 点击一次按钮执行一次 setCount
  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });
  // 当然如果你想要用最新的值，用 ref
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);
  // 每次都能拿到最新的 count ，这其实是可变数据的锅
  // 如果是使用原来的 count，就是简单的函数闭包，不可变数据
  useEffect(() => {
    // Set the mutable latest value
    latestCount.current = count;
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`You clicked ${latestCount.current} times`);
    }, 3000);
  });
```
14. 多次复用 useEffect 的正确姿势，应该注意依赖项的使用，充分发挥 不可变数据 和 单一数据流魅力
```js
function Parent() {
  const [query, setQuery] = useState('react');

  // ✅ Preserves identity until query changes
  const fetchData = useCallback(() => {
    const url = 'https://hn.algolia.com/api/v1/search?query=' + query;
    // ... Fetch data and return it ...
  }, [query]);  // ✅ Callback deps are OK

  return <Child fetchData={fetchData} />
}

function Child({ fetchData }) {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]); // ✅ Effect deps are OK

  // ...
}
```


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
- render props 数据一样，界面不一样，其实就是传递一个render函数下去运行。
- withComponet 高阶组件就是把相同的逻辑抽出来。

# reducer hook
- 该函数接受两个参数，一个是state，和action，和redux那一套一样。调用store.dispatch分发action返回变化后的数据。
- redux：action -> store.dispatch(action.type) -> reducer -> newState -> store
- reducer hook 未来可能会结合redux使用
```js
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
```
# Context hook
- 获取上下文数据，之前的React.createContext()消费者也要套一层。
- 用这个hook就可以直接返回ctx的值，直接看用例把

# callback hook
- 用于得到一个固定引用值的函数，通常用它来优化性能
- 该函数有两个参数：
1. 函数，useCallback会固定该函数的引用，只要依赖项没发生变化则会保持之前函数的地址
2. 依赖项，也是个数组，看例子```CallBack.js```
- 该函数返回值：引用相对固定的函数地址

# Memo hook
- 用于保持一些比较稳定的数据，通常用于性能优化，用法和callback一样，只是callback只能固话一个引用返回。Memo功能强大些，可以固化更多东西。
- 可以让一些稳定的，高开销的渲染数据避免掉没有必要的渲染。
- 比如说list数据不想受点击事件避免不了的重新渲染，就可以用Memo，看例子```Memo.js```
- 为什么会出Memo callback这样的API，因为函数组件是普通函数，它总是被重新渲染，不像类组件那样有些生命钩子只渲染一次。

# Ref hook 一个参数：默认值，返回一个固定的对象。```{current：值}```
- 看例子```imperativeHandle.js```

# imperativeHandle Hook
```js
  useImperativeHandle(ref, () => {
    // 如果不给依赖项，则每次运行函数组件都会调用该函数
    // 如果使用了依赖项，则第一次调用后，则进行缓存，依赖项变化才重新运行
    // <!-- ref.current = 1 -->
    return 1
  }, [])
```
- 这个hook，主要是用来使用ref转发的

# LayoutEffect Hook
- useEffect 是在浏览器渲染之后运行的，如果用它操作真实的dom，渲染页面有时候会闪烁，卡屏；
- 真实渲染之前做一些改动，useLayoutEffect: 完成dom改动，还没有呈现给用户。
- 用法和useEffect一样。
**细节**
- 但是应该尽量的使用useEffect，因为它不会阻塞页面渲染，如果出现了问题，再考虑使用useLayoutEffect








