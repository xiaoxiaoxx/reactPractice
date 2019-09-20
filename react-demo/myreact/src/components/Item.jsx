import React, {Component} from 'react'
import PropTypes from 'prop-types'
//项目备份
export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDelBtn: false
        }
    }
    static propTypes = {
        todo: PropTypes.object.isRequired, //单条数据
        removeTodoWidthId: PropTypes.func.isRequired,
        changeTodoFinished:PropTypes.func.isRequired
    }
    render() {
        const {todo,changeTodoFinished} = this.props
        const {showDelBtn} = this.state
        return (
            <li onMouseOver={()=>this.hasShowBtn(true)}
                onMouseOut={()=>this.hasShowBtn(false)}
            >
            <label>
              <input type="checkbox" checked={todo.finished} onChange={()=>changeTodoFinished(todo.id,!todo.finished)}></input>
              <span>{todo.title}</span>
              <button style={{display:showDelBtn?'block':"none"}}
              onClick = {() => this.props.removeTodoWidthId(todo.id)}
              >删除</button>
            </label>  
          </li>
        )
    }
    //处理按钮的显示和隐藏
    hasShowBtn(flag) {
        this.setState(this.state ={
            showDelBtn:flag
        }  
        )
    }
}