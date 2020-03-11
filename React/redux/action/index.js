/**
 * 1.是一个平面对象，原型指向Object.prototype，即对象字面量
 * 2.action中必须有type属性，该属性用于描述操作的类型，就像请求地址。没有对type类型做出要求
 *   2.1通常使用payload携带附加数据
 * 3.在大型项目中，由于操作类型太多，为了避免硬编码，会将action类型存放到一个单独的文件中
 * 4.为了方便传递action，通常会使用action创建函数来创建action
 *   4.1每次都要新增一个action对象，很麻烦，利用一个函数来返回一个标准的action，这个函数应为无副作用的纯函数。
 * 5.为了方便利用action创建函数分发action, redux提供了一个bindActionCreators。
 *   5.1 bindActionCreators第一个参数是所有的action合并成一个对象。第二个参数是dispatch
 *   5.2 得到一个新对象，新对象的属性名与第一个参数的属性名是一致的，这样以后调用action就会自动触发dispatch（增强action创建函数）
 */
import * as usersAction from './usersAction'
import * as loginUserAction from './loginUserAction'
export default {
    ...usersAction,
    ...loginUserAction
}
