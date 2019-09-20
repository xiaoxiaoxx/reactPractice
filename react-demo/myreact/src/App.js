import React from 'react';
import './App.css';
import Foot from './components/footer'
import Head from './components/head'
import List from './components/list'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[
        {id:1, title:'this is a little pig',finished:false},
        {id:2, title:'this is a little bear',finished:false},
        {id:3, title:'this is a little dog',finished:false},
        {id:4, title:'this is a little duck',finished:false},
      ],
      finishedCount: 0
    }
  }
  
  render() {
    const {todos,finishedCount} = this.state
    console.log(todos)
    return (
      <div className="App">
            <div className="todo-wrap">
               <Head 
                lastTodoId = {todos.length===0?0:todos.length-1}
                addOneTodo = {this.addOneTodo}
               />
               <List todos={todos} 
                     removeTodoWidthId = {this.removeTodoWidthId}
                     changeTodoFinished = {this.changeTodoFinished}
               />
               <Foot finishedCount={finishedCount}
               totalCount={todos.length}
               delCheckedTodo = {this.delCheckedTodo}/>
            </div>
        </div>
    );
  }
  // 修改完成状态
  changeTodoFinished = (todoId,isFinished) => {
    const tempTodos = this.state.todos
    let finishedFlag = 0
    tempTodos.forEach((todo,index) => {
      // console.log(index)
      if(todo.id == todoId) {
        todo.finished = isFinished
      }
      if(todo.finished) {
        finishedFlag +=1
      }
      this.setState ( 
        {
         todos: tempTodos,
         finishedCount:finishedFlag
        } 
       )
    });
    console.log('----',finishedFlag)
  }
  // 删除一条记录
  removeTodoWidthId = (todoId)=> {
    // 遍历数组
    console.log(todoId)
    console.log('hahah')
    const tempTodos = this.state.todos
    let finishedFlag = 0
    tempTodos.forEach((todo,index) => {
      // console.log(index)
      if(todo.id == todoId) {
        tempTodos.splice(index,1)
      }
    });
    //处理选中数量
    tempTodos.forEach((todo,index)=>{
      if(todo.finished) {
        finishedFlag +=1
      }
      console.log(finishedFlag)
    })
    //更新数组状态
    this.setState ( 
     {
      todos: tempTodos,
      finishedCount:finishedFlag
     } 
    )
  }
  // 添加一条数据
  addOneTodo = (todo) => {
    // 取出数组
    let tempTodos = this.state.todos;
    tempTodos.push(todo)
    // 更新状态
    this.setState({
      todos:tempTodos
    })
  }
  // 删除所有任务
 delCheckedTodo = () =>{
   console.log('shanchu ')
   let tempTodos = this.state.todos;
   let tempArr = [];
   tempTodos.forEach((todo,index) => {
     if(!todo.finished) {
       tempArr.push(todo)
     }
   })
  //  更新状态
  this.setState({
    todos:tempArr,
    finishedCount:0
  })
 }
//  全选勾选框
// changeAll() {
//   if(!this.checkStatus){  
//       todos.forEach((todo,index) => {
//           todo.finished = true
//       });
//   }else {
//       todos.forEach((todo,index) => {
//           todo.finished = false
//       })
//   }
// }
}

export default App;
