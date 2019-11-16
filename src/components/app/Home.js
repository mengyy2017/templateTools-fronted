import React from "react"
import {Layout} from "antd"
import 'styles/index.css'
import HeaderBar from "components/app/index/HeaderBar";
import CommArea from "components/app/index/CommArea";
import SwitchRoute from "components/app/index/SwitchRoute";
import FooterBar from "components/app/index/FooterBar";

class Home extends React.Component {
    
    render = () => {
        return (
            <div>

                <Layout className="layout" style={{marginTop: '20px'}}>

                    <HeaderBar/>

                    <CommArea>
                        <SwitchRoute/>
                    </CommArea>

                    <FooterBar/>

                </Layout>


                {/*第一版*/}
                {/*<Row gutter={32}>
                    <Database>
                        <Tables/>
                        <Columns/>
                    </Database>
                </Row>*/}

                {/*第二版*/}
                {/*<Row gutter={32}>
                    <Row type="flex" justify="end" className="header">
                        <Col span={14}><Button type="primary" onClick={this.createCode}>生成代码</Button></Col>
                    </Row>
                    <Database>
                        单独一个path="/"是能匹配任何带/的路径的 比如/a会加载Columns, /a/b也会加载Columns
                        <Route path="/tables" component={Tables}/>
                        <Route path="/" component={Columns}/>
                    </Database>
                </Row>*/}

            </div>
        );
    }

}

export default Home