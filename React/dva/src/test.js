
import React from "react"
import { connect } from "dva"

const Test = (props) => {
    return(
        <div>
            网站根App
        </div>)
}
const mapStateToProps = (state) => ({
    total:state.student.total
});

const mapDispatchToProps = (dispatch) => ({
    // 传入的props方法以on开头
    onDelete:() => dispatch({type:"student/delete", playload:1})
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
export default connect()(Test)