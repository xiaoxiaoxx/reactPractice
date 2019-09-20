import React, { Component } from 'react'
import LeftNav from '../../component/left-nav/index'
import Head from '../../component/header/index'
import './admin.css'

import Home from '../home/home'
import Category from '../catrgory/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'


import { Switch, Route ,Redirect } from 'react-router-dom'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


export default class Admin extends Component {
    render() {
        return (
           <Layout>
               <Sider>
                   <LeftNav />
               </Sider>
               <Layout>
                   <Header>
                       <Head />
                   </Header>
                   <Content style={{background:'white'}}>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/category" component={Category}/>
                            <Route path="/product" component={Product}/>
                            <Route path="/role" component={Role}/>
                            <Route path="/user" component={User}/>
                            {/* <Redirect to='/home'/> */}
                        </Switch>
                    </Content>
                   <Footer style={{textAlign:'center'}}>推荐使用谷歌浏览器，页面体验效果更佳</Footer>
               </Layout>
           </Layout>
        )
    }
}
