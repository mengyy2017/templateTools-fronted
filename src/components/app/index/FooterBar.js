import React from "react";
import {Layout} from "antd";
const { Footer } = Layout

class FooterBar extends React.Component{


    render = () => {
        return (
            <Footer style={{ textAlign: 'center', background: '#fff' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        )
    }

}

export default FooterBar









