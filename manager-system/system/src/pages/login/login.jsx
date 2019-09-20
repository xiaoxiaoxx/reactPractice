import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import './login.css'


 class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log('hahah')
        console.log(this.props.form)
        this.props.form.validateFields((err, { username, password }) => {
            console.log('----===')
          if (!err) {
            console.log('Received values of form: ', username,password);
          }
        });
        //   console.log(this.props.form)
          const form  = this.props.form
          const values = form.getFieldsValue();
          const username = form.getFieldValue('username')
          const password = form.getFieldValue('password')
          if(username === 'admin' && password === '123456') {
              alert('登录成功')
              return <Redirect to='/admin' />
              
          }
          console.log(values,password,username)
       
    };
    validatePwd = (rule, value, callback) => {
        value = value.trim()
        if(!value) {
            callback('输入密码不得为空')
        }else if(value.length<4) {
            callback('输入密码不得小于4位')
        }else if(value.length>11) {
            callback('输入密码不得大于11位')
        }else if(/^[a-zA-Z0-9_]+S/.test(value)){
            callback('输入密码格式不正确')
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='login'>
                <div className="login-header">
                    后台管理系统
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, whitespace: true, message: 'Please input your username!' },
                                {min:4,message:'用户名不能小于四位'},
                                {max:12,message:'用户名不得大于12位'},
                                {pattern: /^[a-zA-Z0-9]+$/, message:'用户名必须是英文'}
                            ],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [ {validator: this.validatePwd} ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                     <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrapperForm = Form.create()(Login)
export default WrapperForm


// 理解form组件：包含<Form>组件
// 利用Form.create()包装一个Form组件生成一个新的组件
// 新组件会向form组件传递一个强大的属性：属性名：form，属性值对象

// 高阶函数
// 定义：接收的参数是函数或者返回值是函数 
/** 
 * 常见的：数组遍历相关的方法  定时器、promise、高阶组件
 * 作用： 实现一个更加强大、动态的功能
 * 
 * 高阶组件：
 *      本质是一个函数
*       函数接收一个组件，返回一个新的组件 
 *      Form.create()返回的就是一个高阶组件
 * 
 * 
 * 组件：组件类，本质上是一个构造函数，定义逐渐：class组件/function组件
 * 组件对象： 组件类的实例，也就是构造函数的实例
 */