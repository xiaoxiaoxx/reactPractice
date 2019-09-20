import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Head extends Component {
    constructor(props) {
        super(props)
        //绑定ref
        this.myInput = React.createRef()
    }
    static propTypes = {
        lastTodoId: PropTypes.number.isRequired,
        addOneTodo: PropTypes.func.isRequired,
    }
    render() {
        return(
            <div className="todo-header">
                <input 
                    ref={this.myInput}
                    type="text" 
                    placeholder="请输入……"
                    onKeyDown = {(e)=>this.handEvent(e)}

                />
            </div>
        )       
    }
    handEvent(e) {
        const {lastTodoId,addOneTodo} = this.props
        // 是否为回车键
        if(e.keyCode == 13) {
            if(!this.myInput.current.value) {
                alert('输入内容不能为空')
                return
            }
            //创建一条新数据
            const todo = {id:lastTodoId+1, title:this.myInput.current.value, finished:false}
            addOneTodo(todo)
            //清空输入框内容
            this.myInput.current.value = ''
        }
    }
}
export default Head