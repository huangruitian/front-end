

import * as actionType from '../actionType'



export const deleteUser = (payload) => ({
    type: actionType.DEL_USER,
    payload
})

export const addUser = (payload) => ({
    type: actionType.ADD_USER,
    payload
})

export const updateUser = (payload) => ({
    type: actionType.UPDATE_USER,
    payload
})

// export default {
//     deleteUser,
//     addUser,
//     updateUser,
// }


