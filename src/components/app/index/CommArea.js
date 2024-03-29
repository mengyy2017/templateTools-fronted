import {Layout, Breadcrumb} from "antd";
const { Content } = Layout
import React from "react";


class CommArea extends React.Component{

    render = () => {
        return (
            <Content style={{ background: '#f0f2f5', marginBottom: '10px' }}>

                <Breadcrumb style={{ margin: '0 0 16px 5px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <div style={{ background: '#fff', minHeight: 580 }}>
                    {this.props.children} {/*或者这里的{this.props.children}直接写<SwitchRoute/>多明显*/}
                </div>


            </Content>
        )
    }

}


export default CommArea;










