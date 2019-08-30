import React from "react"
import { Layout } from 'antd';
import { TopBar } from "./components"


const { Header, Footer, Sider, Content } = Layout;


const Main = props => {
    const { children } = props
    return (
            <Layout className="height100">
                <Sider>Sider</Sider>
                <Layout>
                    <Header className="TopBar"><TopBar /></Header>
                    <Content> <p>main</p>
                        {children}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
    )
}

export default Main