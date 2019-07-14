import React, { Component } from 'react';
import { Layout, Menu, Icon, Badge } from 'antd';

import avater from '@/assets/img/b1.jpg';
import RBadge from '@/components/Badge.jsx';

const { Header } = Layout;
const { SubMenu } = Menu;


class TopBar extends Component {
    state = {
        current: 'mail',
    };

    render() {
        return (
            <Header className="r_header">
                <div style={{float:'left', height: '64px'}}>
                    <Icon style={{
                        fontSize: '35px',
                        color: '#08c',
                        lineHeight: '64px',
                        verticalAlign: 'middle',
                    }}
                          type="twitter" />
                </div>
                <Menu mode="horizontal"
                      selectable={false}
                      style={{ lineHeight: '64px', float: 'right' }}
                      theme="dark" >
                    <Menu.Item key="mail">
                        <Icon type="arrows-alt" />
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Badge count={99}
                               overflowCount={10}>
                            <Icon type="sound" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu className="r_sub_menu"
                             title={
                            <div className="avater">
                                <RBadge color="#87d068"
                                        dot
                                        offset={[40, 40]}
                                        size={9}>
                                    <img alt=""
                                         src={avater}/>
                                </RBadge>
                            </div> }>
                        <Menu.ItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - Roy</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span>退出登录</span></Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

export default TopBar;
