import React from "react"
import {Route} from 'react-router-dom'
import {Row} from "antd"
import 'styles/index.css'
import {Switch} from "react-router";
import ProcessTabs from "components/ProcessTabs";
import LoginFormInfo from "components/LoginFormInfo";
import Hi from "components/Hi";

class Container extends React.Component {
    
    render = () => {
        return (
            <div>

                <Row gutter={32}>
                    <Switch>
                        {/*<Route exact path="/" render={() => <h3>hi</h3>}/>*/}
                        <Route exact path="/" component={Hi}/>
                        <Route path="/login" component={LoginFormInfo}/>
                        <Route path="/select" component={ProcessTabs}/>


                        {/*直接使用render返回内容也是可以的*/}
                        {/*<Route exact path="/selectData" render={() => <Tabs className="tabs-property" defaultActiveKey="1" onChange={this.callback}>*/}
                            {/*<TabPane tab="Tab 1" key="1">*/}
                                {/*<SelectDataTab/>*/}
                            {/*</TabPane>*/}
                            {/*<TabPane tab="Tab 2" key="2">Content of Tab Pane 222</TabPane>*/}
                            {/*<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>*/}
                        {/*</Tabs>}/>*/}
                    </Switch>
                </Row>

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

export default Container