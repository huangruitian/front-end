import React from "react"
import { connect } from "dva"

function Test(props){
    console.log(props)
    return(
         <div>
            {props.number}
            <button onClick={() => {
                props.onDelete()
            }}>减一</button>
            <button onClick={() => {
                props.onAdd()
            }}>加一</button>
        </div>)
}

const mapStateToProps = (state) => ({
    number:state.counter
})

const mapDispatchToProps = (dispatch) => ({
    onDelete:() => dispatch({type:"counter/delete"}),
    onAdd:() => dispatch({type:"counter/add"})
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)