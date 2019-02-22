import React from "react"
import {Route} from 'react-router-dom'
import {Row} from "antd"
import SelectDataTab from 'components/SelectDataTab'
import 'styles/index.css'
import {Switch} from "react-router";
import ProcessTabs from "components/ProcessTabs";

class Container extends React.Component {
    
    render = () => {
        return (
            <div>

                <Row gutter={32}>
                    <Switch>
                        <Route exact path="/" component={ProcessTabs}/>
                        <Route path="/selectDataTab" component={SelectDataTab}/>
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