
// dva 写法，组件connect 之后，dispatch({ type:"counter/delete" })
export default {
  state:0,
  reducers:{
      delete(state){
          return state - 1
      },
      add(state){
        return state + 1
      }
  }
}