import React from "react"
import { Link } from "react-router-dom"
import { Icon, Row, Col, Menu, Dropdown, Badge, Avatar } from "antd"
const TopBar = props => {
    const menu = (
        <Menu>
            <Menu.Item key="1">详细信息</Menu.Item>
            <Menu.Item key="2">系统设置</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3"> <Link><Icon type="logout" />退出登陆</Link></Menu.Item>
        </Menu>
    )
    return (
        <Row type="flex" align="middle" justify="space-between">
            <Col><Icon type="menu-unfold" /></Col>
            <Col>
                <Badge count={990} overflowCount={99}>
                    <Icon type="bell" />
                </Badge>

                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>R</Avatar> Ruily Tian
                         <Icon type="down" />
                    </a>
                </Dropdown>
                <span>登陆</span>

            </Col>
        </Row>

    )
}

export default TopBar