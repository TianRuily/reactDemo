import React, { Component } from "react"
import { Icon, Row, Col, Menu, Avatar, Button } from "antd"
class TopBar extends Component {
    

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div>
                <div className="logoWrapper" >
                    <Avatar className="logo">R</Avatar>后台系统</div>
                <div>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                        </Menu.Item>
                        <Menu.SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.SubMenu key="sub3" title="SubMenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                    </Menu>
                </div>
            </div>

        )
    }
}

export default TopBar