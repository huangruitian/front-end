/**
 * 1.一个数据仓库，有且仅有一个reducer, 并且通常情况下，一个工程只有一个仓库
 * 2.为了方便管理，一般会把reducer放到单独的文件管理
 * 3.reducer的分发时机
 *   3.1通过store.dispatch，分发一个action，此时调用reducer
 *   3.2当创建一个store仓库的时候，会自动调用一次dispatch
 *   3.3可以利用这一点，用来初始化数据，创建仓库的时候，不传递任何的默认值，将reducer的参数设置一个默认值
 * 4.内部使用switch判断
 * 5.必须是一个纯函数
 *   5.1有利于测试和调试
 *   5.2有利于还原数据
 *   5.3有利于和react结合使用
 * 6.具体要求
 *   6.1不能改变参数，若要改变，解构返回一个新的对象。
 *   6.2不能有异步和其它的副作用
 *   6.3不能对外部环境造成影响
 * 7.由于在大中型项目中，操作比较复杂，数据结构也比较复杂，因此要对reducer进行细分
 *   7.1 redux提供了一个帮助我们合并reducer函数，叫做combineReducers
 *   7.2 combineReducers({xxxReducer, xxxReducer}), 返回一个reducer函数
 */

/**
 * @param state 之前仓库的数据
 * @param action 描述操作数据的动作
 * @returns newState 返回一个新的state
 */
/**
 * 约定action的数据格式:{type:'', playload:'附加数据'} 
 */
import usersReducer from './usersReducer'
import loginUserReducer from './loginUserReducer'
// import { combineReducers } from 'redux'
import combineReducers from '../combineReducers'

//这样导出一个reducer就相当于项目只有一个, 相当于combineReducers
// export default (state = {}, action) => {
//    console.log(action)
//    const newState = {
//         users:usersReducer(state.users, action),
//         loginUserReducer:loginUserReducer(state.loginUserReducer, action)
//    }
//    return newState
// }

export default combineReducers({
    users: usersReducer,
    login: loginUserReducer,
})

