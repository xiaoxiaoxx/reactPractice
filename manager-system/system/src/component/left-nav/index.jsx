import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

/**
 * 左侧导航组件
 */
export default class LeftNav extends Component {
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <div className='left-nav'>
               <div className="title-nav">
                   <img src="../../../images/menu.png" alt=""/>
                   主菜单目录
                </div>
                <Link className='left-nav-link'>
                    <Menu
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="/home">
                            <Link to='/home'>
                                <Icon type="home" />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="block" />
                                    <span>商品</span>
                                </span>
                            }
                        >
                            <Menu.Item key="/category">
                                <Link to='/category'>
                                    <Icon type="unordered-list" />
                                    <span>品类管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/product">
                                <Link to='/product'>
                                    <Icon type="tool" />
                                    <span>商品管理</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/user">
                            <Link to='/user'>
                                <Icon type="user" />
                                <span>用户管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/role">
                            <Link to='/role'>
                                <Icon type="safety-certificate" />
                                <span>角色管理</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="fund" />
                                    <span>图形图标</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">
                                <Icon type="bar-chart" />
                                柱形图
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="line-chart" />
                                折线图
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="pie-chart" />
                                饼图
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Link>
            </div>
        )
    }
}
