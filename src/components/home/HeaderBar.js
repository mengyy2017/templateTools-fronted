import {Icon, Layout, Menu} from "antd"
import React from "react";
import {Link} from "react-router-dom";
const {Header} = Layout
const SubMenu = Menu.SubMenu

class HeaderBar extends React.Component{

    render = () => {
        return(
            <Header style={{padding: '0', background: '#f0f2f5', }}>

                <div className="logo" />

                <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{ background: '#fff' }}>

                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="home" /><Link to="/" replace>Navigation Home</Link></span>}>
                        <Menu.Item key="setting:1">
                            <Link to="/login" replace>
                                <Icon type="login" />&nbsp;&nbsp;&nbsp;&nbsp;login
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">
                            <Link to="/select" replace>
                                <Icon type="select"/>&nbsp;&nbsp;&nbsp;&nbsp;select
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="2"><Link to="/menu" replace><Icon type="menu-fold" />Menu</Link></Menu.Item>

                    <Menu.Item key="3"><Link to="/autoCompletion" replace>AutoCompletion</Link></Menu.Item>

                </Menu>
            </Header>
        )
    }

}

export default HeaderBar


