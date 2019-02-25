import {Tabs} from 'antd';
import React from "react";
import connect from "react-redux/es/connect/connect";
import SelectDataTab from "components/SelectDataTab";
import CodeFormInfo from "components/CodeFormInfo";
const TabPane = Tabs.TabPane;

class ProcessTabs extends React.Component{

    state = {
            activeKey: "0",
        }

    changeActiveKey = (key) => {
        console.log(key);
        this.setState({activeKey: key})
    }

    render = () => {

        return (
            <div>
                <Tabs className="tabs-property" defaultActiveKey="1" activeKey={this.state.activeKey} onChange={this.changeActiveKey}>
                    <TabPane disabled tab="Tab 0" key="0">
                        <CodeFormInfo changeActiveKey={this.changeActiveKey.bind(this)}/>
                    </TabPane>
                    <TabPane disabled tab="Tab 1" key="1">
                        <SelectDataTab/>
                    </TabPane>
                    <TabPane disabled tab="Tab 2" key="2">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }

}

var mapStateToProps = state => ({ })

export default connect(mapStateToProps)(ProcessTabs)
