import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import routes from '@/router/config.js';
const { Sider } = Layout;
const { SubMenu } = Menu;

class TopBar extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render() {
        return (
            <Sider collapsed={this.state.collapsed}
                   collapsible
                   onCollapse={this.onCollapse}>
                {/* <div className="logo" /> */}
                <Menu defaultSelectedKeys={['/main/dashboard/index']}
                      mode="inline"
                      theme="dark">
                    {
                        routes.menus.map((menu) => {
                            return menu.subs ? (
                                <SubMenu
                                    key={menu.key}
                                    title={
                                        <span>
                                            <Icon type={menu.icon} />
                                            <span>{menu.title}</span>
                                        </span>
                                    } >
                                    {
                                        menu.subs.map(sub=> (
                                            <Menu.Item key={sub.key}>{sub.title}</Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            ) : (
                                <Menu.Item key={menu.key}>
                                    <Icon type={menu.icon} />
                                    <span>{menu.title}</span>
                                </Menu.Item>
                            );
                        })
                    }
                </Menu>
            </Sider>
        );
    }
}

export default TopBar;
