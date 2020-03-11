import React, { Component } from './node_modules/react'
import store from '../redux'
import actions from '../redux/action';
function User(props) {
  console.log(props)
  let { users } = props;
  return (
    <div>
      {
        users.map((d) => {
          return <div key={d.id}>{d.name}</div>
        })
      }
      <button onClick={props.addUser}> 增加 </button>
      <button onClick={props.deleteUser}> 删除 </button>
    </div>
  )
}
class UserContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { ...mapStateToProps(store.getState()) }
    //状态发生改变，刷新界面
    store.subscribe(() => {
      this.setState({
        ...mapStateToProps(store.getState())
      })
    })
  }
  render() {
    let eventHandles = mapDispatchToProps(store.dispatch)
    return (
      <div>
        <User users={this.state.users} {...eventHandles} />
      </div>
    )
  }
}
//需要的属性数据映射到组件
function mapStateToProps(state) {
  return {
    users: state.users
  }
}
//需要的方法映射到组件
function mapDispatchToProps(dispatch) {
  return {
    addUser() {
      dispatch(actions.addUser({ name: 'nb', age: 100 }))
    },
    deleteUser() {
      dispatch(actions.deleteUser('hrt'))
    }
  }
}
export default UserContainer

