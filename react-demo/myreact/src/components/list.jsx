import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes= {
        todos:PropTypes.array.isRequired,   //数据数组
        removeTodoWidthId:PropTypes.func, //删除一条数据
        changeTodoFinished:PropTypes.func.isRequired  //选中数量框
    }
    render() {
        const {todos,removeTodoWidthId,changeTodoFinished} = this.props
        console.log(todos)
        return(
            <div>
                 <ul className="todo-main">
                   {/* <Item /> */}
                   {/* 循环创建从父组件传过来的数组 */}
                   {
                       todos.map((todo,index)=> (
                           <Item
                            key={index}
                            todo = {todo}
                            removeTodoWidthId = {removeTodoWidthId}
                            changeTodoFinished= {changeTodoFinished}
                           />
                       ))
                   }
                </ul>
            </div>
        )
    }
} 