import {Tabs} from 'antd';
import React from "react";
import connect from "react-redux/es/connect/connect";
import SelectDataTab from "components/SelectDataTab";
import CodeFormInfo from "components/CodeFormInfo";
import {setActiveKeyAction} from "actions/processTabsAction";
const TabPane = Tabs.TabPane;

class ProcessTabs extends React.Component{

    changeActiveKey = (key) => {
        this.props.dispatch(setActiveKeyAction(key))
    }

    render = () => {

        const {activeKey} = this.props

        return (
            <div>
                <Tabs className="tabs-property" defaultActiveKey="1" activeKey={activeKey} onChange={this.changeActiveKey}>
                    <TabPane disabled tab="Tab 0" key="0">
                        <CodeFormInfo changeActiveKey={this.changeActiveKey.bind(this)}/>
                    </TabPane>
                    <TabPane disabled tab="Tab 1" key="1">
                        <SelectDataTab changeActiveKey={this.changeActiveKey.bind(this)}/>
                    </TabPane>
                    <TabPane disabled tab="Tab 2" key="2">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }

}

var mapStateToProps = state => state.activeKey


export default connect(mapStateToProps)(ProcessTabs)
