import {Row, Col, Tabs} from 'antd';
import React from "react";
import connect from "react-redux/es/connect/connect";
const TabPane = Tabs.TabPane;



class ProcessTabs extends React.Component{

    callback = (key) => {
        console.log(key);
    }

    render = () => {

        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane className="tab-panel-margin" tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane className="tab-panel-margin" tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane className="tab-panel-margin" tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>

            </Tabs>
        )
    }

}

var mapStateToProps = state => ({ })

export default connect(mapStateToProps)(ProcessTabs)
