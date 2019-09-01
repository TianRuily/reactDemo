import React ,{useState}from "react"
import { Layout } from 'antd';
import { TopBar , SideBar } from "./components"


const { Header, Footer, Sider, Content } = Layout;


const Main = props => {
    const { children } = props
    const [collapsed, setcollapsed] = useState(false);
    return (
            <Layout className="height100">
                <Sider className="SideBar" collapsible trigger={null} collapsed={collapsed}><SideBar collapsed= {collapsed}></SideBar></Sider>
                <Layout>
                    <Header className="TopBar"><TopBar collapsed={collapsed} setcollapsed={setcollapsed}/></Header>
                    <Content> <p>main</p>
                        {children}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
    )
}

export default Main