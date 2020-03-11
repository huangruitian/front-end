/**
 * redux-thunk中间件，处理副作用, 一般放在第一个。
 * 怎么处理副作用呢？他是处理action的副作用的。
 * action必须是一个平面的对象，没有任何的副作用，但是有了thunk之后，
 * 它可以让action变成一个函数，允许有副作用。当action是一个函数被分发时，
 * thunk会阻止action继续向后移交。要继续dispatch才往后移交，
 * 这样的话就可以在里面处理很多副作用了，比如AJAX请求等等。
 * thunk会向函数中传三个参数：
 *   dispatch：store.dispatch (为了重新走一次流程)
 *   getState: store.dispatch (可以获取数据)
 *   extra:用户设置的额外参数 thunk.withExtraArgument(123), 使用中间件的时候配置下去。
 */

// 没有中间件的情况下如何处理副作用？如下，手动。不能在redux里面做，这样很麻烦。
store.dispatch(actions.setLoading(true))
ajax().then(resp => {
    //加载数据的时候，界面应该显示界面正在加载中。。。。。
    //这样的话就需要一个loading的action 
    let data = resp.data
    store.dispatch(actions.addUser(data))
    store.dispatch(actions.setLoading(false))
}).catch(e => {
    store.dispatch(actions.setLoading(false))
})

// redux 的 action 不能没有副作用，只能这么处理。有了thunk之后，
// action允许返回一个函数，函数里面也允许有副作用，例如下面的action。
export default function fetchUsers() {
    //由于thunk存在，允许副作用
    return async function (dispatch, getState, extra) { //会把dispatch塞进来
        dispatch(actions.setLoading(true))
        const users = await ajax()
        const action = actions.addUser(users)
        dispatch(action)
        dispatch(actions.setLoading(false))
    }
}
// 源码
const createMiddlewareThunk = (extra) => {
    // 返回一个thunk中间件，还记得中间件的书写方式吗？
    return store => next => action => {
       if(typeof action === 'function'){
         return action(store.dispatch, store.getState, extra)
       }else{
         return next(action)
       }
    }
}
const thunk = createMiddlewareThunk();
thunk.withExtraArgument = createMiddlewareThunk
export default thunk