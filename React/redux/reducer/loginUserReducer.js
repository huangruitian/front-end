import * as actionType from '../actionType'


const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionType.LOGIN_USER:
        return { 
            ...state,
            ...payload
         }
    default:
        return state
    }
}
