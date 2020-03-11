

import * as actionType from '../actionType'
import uuid from './node_modules/uuid'

 const initialState = [
     {
         id:uuid(),
         name:'hrt',
         age:18
     },
     {
        id:uuid(),
        name:'kw',
        age:10
     }
 ]
 
 export default (state = initialState, { type, payload }) => {
     switch (type) {
     case actionType.ADD_USER:
         return [...state, payload]
     case actionType.DEL_USER:
         return state.filter((d) => d.name !== payload)
     case actionType.UPDATE_USER:
         return state.map((d) => d.name === payload.name ? {...d, ...payload} : d)
     default:
         return state
     }
 }
 
 
 