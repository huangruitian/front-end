import * as util from './util'
export const ADD_USER = Symbol('ADD_USER') //用Symbol可以避免字符串重复
export const DEL_USER = Symbol('DEL_USER')
export const UPDATE_USER = Symbol('UPDATE_USER')

export const LOGIN_USER = Symbol('LOGIN_USER')

export const INIT = () => {
    return `@@redux/INIT${util.getRandomString(6)}`
}

export const UNKNOWN = () => {
    return `@@redux/PROBE_UNKNOWN_ACTION${util.getRandomString(6)}`
}