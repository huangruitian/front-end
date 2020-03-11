import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from '../redux'
import actions from '../redux/action';

function User(props) {
  let { users } = props;
  return (
    <div>
      {
        users.map((d) => {
          return <div key={d.id}>{d.name}</div>
        })
      }
      <button
        onClick={
          () => props.addUser({ id: Math.random() + '', name: 'nb', age: 100 })
        }> 增加 </button>
      <button
        onClick={
          () => props.deleteUser('nb')
        }> 删除 </button>
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
    // let eventHandles = mapDispatchToProps(store.dispatch)
    return (
      <div>
        {/* <User users = {this.state.users} {...eventHandles}/> */}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  }
}

// 写法一
// function mapDispatchToProps(dispatch){
//     return {
//       addUser(){
//         dispatch(actions.addUser({id:symbol('id'), name:'nb', age:100}))
//       },
//       deleteUser(){
//         dispatch(actions.deleteUser('hrt1'))
//       }
//     }
//  }

// 写法二, 不能直接解构action的函数，这样的话，会有耦合。需另取一个属性名字
// const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
//     addUser:actions.addUser,
//     deleteUser:actions.deleteUser
// }, dispatch)

// 写法二的情况二：
const creators = {
  addUser: actions.addUser,
  deleteUser: actions.deleteUser
}

//返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps)
const hoc = connect(mapStateToProps, creators)

//传入展示组件，返回容器组件
export default hoc(User)

