/**
 * 
 * @param  {...any} middleware 所有中间件
 * tips：一般的中间件只能增强dispatch功能。像我们手写的logger
 *       thunk才能处理副作用！！！
 */
import compose from './compose'
// let store = applyMiddleware(...middleware)(createStore)(reducer)

export default function(...middleware){
    return function(createStore){ //给我创建仓库的函数
        return function(reducer, defaultState){//创建仓库的函数
           //创建仓库
           const store = createStore(reducer, defaultState)
           let dispatch = () => {
               throw new Error('目前还不能使用')
           }
           const simpleStore = {
               getState:store.getState,
               dispatch:(...args) => dispatch(...args), //指向上面新的dispatch
           }
           //给dispatch赋值
           //根据中间件数组，得到一个dispatch创建函数数组    
           const dispatchProducers = middleware.map(d => d(simpleStore))
           //再倒过来组合得到一个新的dispatch
           const dispatchProducer = compose(...dispatchProducers)
           //最后覆盖
           dispatch = dispatchProducer(store.dispatch)
           return {
             ...store,
             dispatch,
           }
        }
    }
}