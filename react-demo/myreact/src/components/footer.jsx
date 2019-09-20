import React,{Component} from 'react'
import PropTypes from 'prop-types'

 class Foot extends Component {
     constructor(props) {
        super(props)
        this.state = {
            checkStatus: false
        }
     }
    static propTypes = {
        finishedCount: PropTypes.number.isRequired, //已完成任务数量
        totalCount: PropTypes.number.isRequired,  //总数
        delCheckedTodo: PropTypes.func.isRequired,  //删除已完成任务
        todos: PropTypes.array.isRequired,  //数组
        dealCheckedAllTodo:PropTypes.func.isRequired
    }
    render() {
        const {finishedCount,totalCount,delCheckedTodo} = this.props
        console.log(this.props)
        const {todos,checkStatus} = this.state 
        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={checkStatus} onChange={()=>this.changeAll()}></input>
                </label>
                <span>已完成{finishedCount}件</span><span>/总计{totalCount}件</span>
                <button onClick = { ()=>delCheckedTodo() }>清除已完成任务</button>
            </div>
        )
        
    }
    
}
export default Foot